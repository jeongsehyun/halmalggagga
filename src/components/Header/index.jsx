import "./index.scss";
import { FaAngleLeft } from "react-icons/fa6";

function Header({ border, title }) {
  return (
    <div className={"header-container" + (border ? " border" : "")}>
      <FaAngleLeft className="pointer icon-back" />
      <p className="header-title">{title}</p>
    </div>
  );
}

export default Header;
