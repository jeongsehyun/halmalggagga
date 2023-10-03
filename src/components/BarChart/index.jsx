import "./index.scss";

function BarChart() {
  return (
    <div className="barchart-container">
      <p className="percent">
        80<span className="unit">%</span>
      </p>
      <div className="barchart">
        <div className="type-o"></div>
        <div className="type-x"></div>
      </div>
    </div>
  );
}

export default BarChart;
