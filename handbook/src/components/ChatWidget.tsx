import React, { useState, useEffect, useRef } from 'react';
import styles from './ChatWidget.module.css';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

interface ChatWidgetProps {
  pendingMessage: string;
  setPendingMessage: (message: string) => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ pendingMessage, setPendingMessage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    if (pendingMessage) {
      setInput(pendingMessage);
      setIsOpen(true); // Open chat if there's a pending message
      setPendingMessage(''); // Clear the pending message
    }
  }, [pendingMessage, setPendingMessage]);

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage: Message = { text: input, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput('');

      // Extract context from pendingMessage if any, for now, it's just the input
      const context = pendingMessage; // Or parse it more intelligently if needed

      // Simulate API call
      try {
        const response = await fetch('https://huzaifa1452007-robotics-book.hf.space/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ session_id: 'test_session', query: input, context: context }),
        });
        const data = await response.json();
        const botMessage: Message = { text: data.response, sender: 'bot' };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error('Error sending message:', error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Error: Could not get a response.', sender: 'bot' },
        ]);
      }
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatToggleButton} onClick={toggleChat}>
        Chat
      </div>
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <h3>AI Assistant</h3>
            <span className={styles.closeButton} onClick={toggleChat}>
              &times;
            </span>
          </div>
          <div className={styles.chatMessages}>
            {messages.map((msg, index) => (
              <div key={index} className={`${styles.message} ${styles[msg.sender]}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className={styles.chatInputContainer}>
            <input
              type="text"
              className={styles.chatInput}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
              placeholder="Ask me anything..."
            />
            <button className={styles.sendButton} onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
