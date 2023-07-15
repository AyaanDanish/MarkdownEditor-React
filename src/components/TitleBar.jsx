import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";

const TitleBar = () => {
  return (
    <div className="titlebar-container">
      <div>
        <FontAwesomeIcon icon={faMarkdown} className="md-icon" size="lg" />
      </div>
      <h1 id="title">Ayaan&apos;s Reactive Markdown Editor</h1>
    </div>
  );
};

export default TitleBar;
