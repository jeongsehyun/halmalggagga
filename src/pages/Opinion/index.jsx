import "./index.scss";
import Header from "../../components/Header";
import VotingStatus from "../../components/VotingStatus";

function Opinion() {
  return (
    <div className="page-container opinion-container">
      <Header border={false} />
      <VotingStatus />
    </div>
  );
}

export default Opinion;
