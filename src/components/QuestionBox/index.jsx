import TouchBtn from "../TouchBtn";
import "./index.scss";

function QuestionBox({ title, content }) {
  return (
    <div className="questionbox-container">
      <div className="img-box">
        <div className="img"></div>
      </div>
      <div className="content">
        <p>{content}</p>
      </div>
      <p className="title">{title}</p>
      <TouchBtn btnClass="btn-touch" />
    </div>
  );
}

export default QuestionBox;
