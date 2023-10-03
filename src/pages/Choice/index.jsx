import ChoiceBox from "../../components/\bChoiceBox";
import "./index.scss";

function Choice() {
  return (
    <div className="page-container choice-container">
      <ChoiceBox type="O" content="할까요?" marginBottom={true} />
      <ChoiceBox type="x" content="말까요?" />
    </div>
  );
}

export default Choice;
