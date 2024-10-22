import React from "react";
import Wrapper from "../assets/Wrappers/SingleJobCard";
import { Link } from "react-router-dom";
import {
  FaLocationArrow,
  FaBriefcase,
  FaTrash,
  FaPen,
  FaCalendar,
} from "react-icons/fa";
import { useDashboardContext } from "../Context";

const SingleJobCard = ({ job }) => {
  const {
    title,
    company,
    jobLocation,
    jobStatus,
    jobType,
    createdAt,
    _id: id,
  } = job;
  const { setPopup, openPopup } = useDashboardContext();
  return (
    <>
      <Wrapper>
        <div className="tag">{jobType}</div>
        <div className="header-card">
          <div className="start-letter">
            <h2>{title.substr(0, 1)}</h2>
          </div>
          <div>
            <h3>{title.substr(0, 30)}</h3>
            <h4>{company}</h4>
          </div>
        </div>
        <div className="footer-card">
          <div className="row-details-job">
            <FaLocationArrow className="icon-job" />
            <span>{jobLocation}</span>
          </div>
          <div className="row-details-job">
            <FaBriefcase className="icon-job" />
            <span>{jobStatus}</span>
          </div>
          <div className="row-details-job">
            <FaCalendar className="icon-job" />
            <span>{new Date(createdAt).toDateString()}</span>
          </div>
          <div className="float-box">
            <div>
              <FaTrash
                className="icon-job"
                onClick={() => {
                  setPopup({
                    ...openPopup,
                    id,
                    openModal: !openPopup.openModal,
                  });
                }}
              />
            </div>
            <div>
              <Link to={`/dashboard/edit-job/${id}`}>
                <FaPen className="icon-job" />
              </Link>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default SingleJobCard;
