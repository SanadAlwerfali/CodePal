import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeSnippet = ({ language, code }) => (
  <SyntaxHighlighter language={language} style={dark}>
    {code}
  </SyntaxHighlighter>
);

export default CodeSnippet;
