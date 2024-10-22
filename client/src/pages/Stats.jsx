import React, { useState } from "react";
import { ChartsContainer, StatItem } from "../components";
import {
  FaBriefcase,
  FaBug,
  FaCalendar,
  FaSuitcaseRolling,
} from "react-icons/fa";
import Wrapper from "../assets/Wrappers/Stats";
import { customFetch } from "../utils/axios";
import { useLoaderData } from "react-router-dom";

export const statsLoader = async () => {
  try {
    const { data } = await customFetch("/jobs/stats");
    return { applications: data.applications, monthlyStats: data.monthlyStats };
  } catch (error) {
    console.log(error);
  }
};

const Stats = () => {
  const { applications, monthlyStats } = useLoaderData();
  // const applications = [...jobs].reduce((total, item) => {
  //   const { jobStatus } = item;
  //   if (total[jobStatus]) {
  //     total[jobStatus] = total[jobStatus] + 1; //// We need both if and else as there is no existing instance in the total object
  //   } else {
  //     total[jobStatus] = 1;
  //   }
  //   return total;
  // }, {});

  return (
    <>
      <Wrapper>
        <div className="stats-wrapper">
          <StatItem
            color={"#f59e0b"}
            title={"Pending interviews"}
            value={applications?.pending || 0}
            bcg={"#f59e0b"}
            icon={<FaSuitcaseRolling />}
          />
          <StatItem
            color={"#2c25ff"}
            title={"Interviews Scheduled"}
            value={applications?.interview || 0}
            bcg={"#2c25ff"}
            icon={<FaCalendar />}
          />
          <StatItem
            color={"#f20060"}
            title={"Jobs Declined"}
            value={applications?.rejected || 0}
            bcg={"#f20060"}
            icon={<FaBug />}
          />
        </div>
        <div className="charts-container">
          {monthlyStats.length > 0 ? (
            <ChartsContainer data={monthlyStats} />
          ) : null}
        </div>
      </Wrapper>
    </>
  );
};

export default Stats;
