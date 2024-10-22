import React from "react";
import {
  BarChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const BarChartContainer = ({ data }) => {
  return (
    <>
      <ResponsiveContainer width={"100%"} height={400}>
        <BarChart data={data} margin={{ top: 50 }}>
          <CartesianGrid strokeDasharray={"3 3"} />
          <XAxis dataKey={"date"} />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey={"count"} fill="#f20060" barSize={90} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChartContainer;
