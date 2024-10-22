import React, { useState } from "react";
import BarChartContainer from "./BarChart";
import AreaChartContainer from "./AreaChart";
import Wrapper from "../assets/Wrappers/ChartsContainer";
const ChartsContainer = ({ data }) => {
  const [barChart, setBarChart] = useState(true);
  return (
    <>
      <Wrapper>
        <h2>Monthly Applications</h2>
        <div className="btn-wrapper">
          <button
            className={barChart ? "btn active" : "btn inactive"}
            onClick={() => {
              setBarChart(true);
            }}
          >
            {"Bar Chart"}
          </button>
          <button
            className={!barChart ? "btn active" : "btn inactive"}
            onClick={() => {
              setBarChart(false);
            }}
          >
            {"Area Chart"}
          </button>
        </div>
        {barChart ? (
          <BarChartContainer data={data} />
        ) : (
          <AreaChartContainer data={data} />
        )}
      </Wrapper>
    </>
  );
};

export default ChartsContainer;
