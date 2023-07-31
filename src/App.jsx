import { useEffect, useState } from "react";
import Markdown from "./components/Markdown";
import Split from "react-split";
import Editor from "./components/Editor";
import TitleBar from "./components/TitleBar";
import "./index.css";

const App = () => {
  const [input, setInput] = useState("");
  const [panelSizes, setPanelSizes] = useState([50, 50]);

  const handleResize = (e) => {
    setPanelSizes(e);
  };

  useEffect(() => {
    const fetchFileContent = async () => {
      try {
        const response = await fetch("./components/text/InitialMarkdown.md");
        const content = await response.text();
        setInput(content);
      } catch (error) {
        console.error("Error fetching file:", error);
      }
    };

    fetchFileContent();
  }, []);

  return (
    <>
      <TitleBar />
      <div className="body-container">
        <Split
          className="split"
          sizes={panelSizes}
          gutterSize={12}
          minSize={0}
          onDrag={handleResize}
        >
          <div className="panel">
            <Editor
              setInput={setInput}
              input={input}
              setPanelSizes={setPanelSizes}
              myPanelSize={panelSizes[0]}
            />
          </div>
          <div className="panel">
            <Markdown
              text={input}
              setPanelSizes={setPanelSizes}
              myPanelSize={panelSizes[1]}
            />
          </div>
        </Split>
      </div>
    </>
  );
};

export default App;
