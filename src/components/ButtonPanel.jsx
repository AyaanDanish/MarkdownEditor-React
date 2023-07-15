import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUpRightAndDownLeftFromCenter,
  faArrowRotateRight,
} from "@fortawesome/free-solid-svg-icons";

const ButtonPanel = ({ setPanelSizes, panelType }) => {
  const targetPanelSize = panelType == "editor" ? [100, 0] : [0, 100];

  return (
    <div className={`${panelType}-btn-container`}>
      <FontAwesomeIcon
        icon={faUpRightAndDownLeftFromCenter}
        size="lg"
        className="max-btn"
        onClick={() => setPanelSizes(targetPanelSize)}
      />
      <button onClick={() => setPanelSizes([50, 50])}>
        <FontAwesomeIcon
          icon={faArrowRotateRight}
          size="lg"
          className="reset-btn"
        />
      </button>
    </div>
  );
};

ButtonPanel.propTypes = {
  setPanelSizes: PropTypes.func.isRequired,
  panelType: PropTypes.string.isRequired,
};

export default ButtonPanel;
