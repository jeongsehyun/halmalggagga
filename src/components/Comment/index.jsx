import "./index.scss";
import { FaX, FaO } from "react-icons/fa6";
import BorderBox from "../BorderBox";

function Comment({ type, comment }) {
  return (
    <div className="pointer commentbox-container">
      <div className="img-box">
        <div className="img"></div>
      </div>
      <BorderBox boxClass="comment-box">
        {type === "O" ? <FaO className="icon-type type-o" /> : <FaX className="icon-type type-x" />}
        <p>{comment}</p>
      </BorderBox>
    </div>
  );
}

export default Comment;
