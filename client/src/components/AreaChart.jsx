import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const AreaChartContainer = ({ data }) => {
  return (
    <>
      <ResponsiveContainer width={"100%"} height={400}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray={"3 3"} />
          <XAxis dataKey={"date"} />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Area
            type={"monotone"}
            stroke="#f20060"
            fill="#f20060"
            dataKey={"count"}
          />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
};

export default AreaChartContainer;
