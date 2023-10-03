import "./index.scss";
import { FaX, FaO } from "react-icons/fa6";
import BorderBox from "../BorderBox";

function ChoiceBox({ type, content, marginBottom }) {
  return (
    <div className={"pointer choicebox-container" + (marginBottom ? " margin-bottom-24" : "")}>
      <div className="type-box">{type === "O" ? <FaO className="icon-type type-o" /> : <FaX className="icon-type type-x" />}</div>
      <BorderBox boxClass="content-box">
        <p>{content}</p>
      </BorderBox>
    </div>
  );
}

export default ChoiceBox;
