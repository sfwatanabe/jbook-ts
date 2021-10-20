import MonacoEditor from "@monaco-editor/react";

const CodeEditor = () => {
  return (
    <MonacoEditor
      height="500px"
      language="javascript"
      theme="dark"
      options={{
        wordWrap: "on",
        minimap: { enabled: false },
        showUnused: false,
        folding: false,
        lineNumbersMinChars: 3,
        fontSize: 14,
        scrollBeyondLastLine: false,
        automaticLayout: true,
        rulers: [
          {
            column: 80,
            color: "#DA4B81",
          },
        ],
      }}
    />
  );
};

export default CodeEditor;
