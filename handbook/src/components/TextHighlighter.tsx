import React, { useState, useEffect, useRef, ReactNode } from 'react';
import styles from './TextHighlighter.module.css';

interface TextHighlighterProps {
  children: ReactNode;
  setPendingMessage: (message: string) => void;
}

const TextHighlighter: React.FC<TextHighlighterProps> = ({ children, setPendingMessage }) => {
  const [showButton, setShowButton] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const [selectedText, setSelectedText] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseUp = () => {
    if (!containerRef.current) return;

    const selection = window.getSelection();
    const text = selection?.toString().trim();

    if (text && text.length > 0 && containerRef.current.contains(selection?.anchorNode || null)) {
      setSelectedText(text);
      const range = selection?.getRangeAt(0);
      if (range) {
        const rect = range.getBoundingClientRect();
        setButtonPosition({
          top: rect.top + window.scrollY - 40, // Position above the selection
          left: rect.left + window.scrollX + rect.width / 2 - 50, // Center the button
        });
        setShowButton(true);
      }
    } else {
      setShowButton(false);
    }
  };

  const handleAskAI = () => {
    setPendingMessage(selectedText);
    setShowButton(false);
  };

  const handleMouseDown = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node) && !document.getElementById('ask-ai-button')?.contains(event.target as Node)) {
      setShowButton(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousedown', handleMouseDown);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <div ref={containerRef} className={styles.textHighlighterContainer}>
      {children}
      {showButton && (
        <button
          id="ask-ai-button"
          className={styles.askAIButton}
          style={{ top: buttonPosition.top, left: buttonPosition.left }}
          onClick={handleAskAI}
        >
          Ask AI
        </button>
      )}
    </div>
  );
};

export default TextHighlighter;