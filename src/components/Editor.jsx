import PropTypes from "prop-types";
import ButtonPanel from "./ButtonPanel";

const Editor = ({ input, setInput, setPanelSizes, myPanelSize }) => {
  return (
    myPanelSize > 5 && (
      <div className="editor-pane">
        <ButtonPanel setPanelSizes={setPanelSizes} panelType={"editor"} />
        <textarea
          autoFocus
          id="editor"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
    )
  );
};

Editor.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
  setPanelSizes: PropTypes.func.isRequired,
  myPanelSize: PropTypes.number.isRequired,
};

export default Editor;
