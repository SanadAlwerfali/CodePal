import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippet = ({ language, code }) => (
  <SyntaxHighlighter language={language} style={coldarkDark}>
    {code}
  </SyntaxHighlighter>
);

export default CodeSnippet;
