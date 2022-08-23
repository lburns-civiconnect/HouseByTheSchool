// Allows you to display rich text markdown coming from strapis collections
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../css/RichText.css";

function RichText({ text }) {
  if (!text) return null;

  return (
    <div className="RichText">
      <ReactMarkdown children={text} remarkPlugins={[remarkGfm]} />
    </div>
  );
}

export default RichText;
