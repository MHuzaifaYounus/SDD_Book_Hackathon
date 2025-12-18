import React, {type ReactNode, useState} from 'react';
import Layout from '@theme-original/Layout';
import type LayoutType from '@theme/Layout';
import type {WrapperProps} from '@docusaurus/types';
import ChatWidget from '@site/src/components/ChatWidget';
import TextHighlighter from '@site/src/components/TextHighlighter';

type Props = WrapperProps<typeof LayoutType>;

export default function LayoutWrapper(props: Props): ReactNode {
  const [pendingMessage, setPendingMessage] = useState("");

  return (
    <>
      <TextHighlighter setPendingMessage={setPendingMessage}>
        <Layout {...props} />
      </TextHighlighter>
      <ChatWidget pendingMessage={pendingMessage} setPendingMessage={setPendingMessage} />
    </>
  );
}
