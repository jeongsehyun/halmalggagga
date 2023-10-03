import "./index.scss";
import { LuSparkles } from "react-icons/lu";

function TouchBtn({ title, btnClass }) {
  btnClass = btnClass || "";
  console.log(btnClass);
  console.log(typeof btnClass);
  return (
    <div className={"pointer touchbtn-container " + btnClass}>
      <LuSparkles className="icon" />
      <p className="title">Touch</p>
    </div>
  );
}

export default TouchBtn;
