import React, { useRef, useEffect, useState } from "react";

const CustomTextEditor = ({ initialContent, onSave }) => {
  const editorRef = useRef(null);
  const [hasContent, setHasContent] = useState(initialContent.trim() !== "");

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = initialContent;
      setHasContent(initialContent.trim() !== "");
    }
  }, [initialContent]);

  const handleBlur = () => {
    if (editorRef.current) {
      onSave(editorRef.current.innerHTML);
      setHasContent(editorRef.current.innerHTML.trim() !== "");
    }
  };

  const handleFocus = () => {
    setHasContent(true);
  };

  const handleInput = () => {
    setHasContent(editorRef.current.innerHTML.trim() !== "");
  };

  return (
    <div
      style={{
        position: "relative",
        padding: "10px",
        minHeight: "200px",
        outline: "none",
        border: "none",
        boxSizing: "border-box",
      }}
    >
      <div
        ref={editorRef}
        contentEditable
        onBlur={handleBlur}
        onFocus={handleFocus}
        onInput={handleInput}
        style={{ minHeight: "200px", padding: "10px", overflowY: "auto" }}
      />
      {!hasContent && (
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            pointerEvents: "none",
            userSelect: "none",
            color: "GrayText",
          }}
        >
          Hi Jennie
        </div>
      )}
    </div>
  );
};

export default CustomTextEditor;
