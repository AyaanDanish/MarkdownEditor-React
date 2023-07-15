import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import { marked } from "marked";
import ButtonPanel from "./ButtonPanel";

const Markdown = ({ text, setPanelSizes, myPanelSize }) => {
  marked.use({
    gfm: true,
    mangle: false,
    headerIds: false,
  });
  const sanitizedHTML = DOMPurify.sanitize(text);
  const parsedText = marked.parse(sanitizedHTML);

  return (
    myPanelSize > 5 && (
      <div>
        <ButtonPanel setPanelSizes={setPanelSizes} panelType={"markdown"} />
        <div id="preview" dangerouslySetInnerHTML={{ __html: parsedText }} />
      </div>
    )
  );
};

Markdown.propTypes = {
  text: PropTypes.string.isRequired,
  setPanelSizes: PropTypes.func.isRequired,
  myPanelSize: PropTypes.number.isRequired,
};

export default Markdown;
