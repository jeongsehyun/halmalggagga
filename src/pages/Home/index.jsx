import "./index.scss";
import BorderBox from "../../components/BorderBox";
import cat from "../../assets/images/pp-cat.png";
import { FaLocationCrosshairs } from "react-icons/fa6";

function Home() {
  return (
    <div className="page-container home-container">
      <BorderBox>
        <div className="header-box">
          <p className="header-title">서울특별시 영등포구</p>
          <FaLocationCrosshairs className="pointer icon-location" />
        </div>
      </BorderBox>
      <img className="img-ppcat" src={cat} alt="메뉴버튼" />
    </div>
  );
}

export default Home;
