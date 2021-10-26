import { useState } from "react";

import bundle from "../../bundler";
import CodeEditor from "./CodeEditor/CodeEditor";
import Preview from "./Preview/Preview";
import Resizable from "../Resizable/Resizable";

const CodeCell = () => {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <Resizable direction={"vertical"}>
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <Resizable direction={"horizontal"}>
          <CodeEditor
            initialValue={"const a = 1;"}
            onChange={(value) => setInput(value)}
          />
        </Resizable>
        <Preview code={code} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
