import "./index.scss";

function BorderBox({ children, boxClass }) {
  boxClass = boxClass || "";
  return <div className={"boderbox-container " + boxClass}>{children}</div>;
}

export default BorderBox;
