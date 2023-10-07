import BarChart from "../BarChart";
import "./index.scss";
import { FaX, FaO } from "react-icons/fa6";

function VotingStatus() {
  return (
    <div className="voting-status-container">
      <div className="type-box">
        <FaO className="icon-type type-o" />
      </div>
      <p className="content">
        "<span>열심히 공부한다</span>"
      </p>
      <BarChart />
    </div>
  );
}

export default VotingStatus;
