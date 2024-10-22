import React from "react";
import PopupWrapper from "../assets/Wrappers/PopupWrapper";
import { useDashboardContext } from "../Context";
import { customFetch } from "../utils/axios";
import { toast } from "react-toastify";
import { useNavigation } from "react-router-dom";
const PopupJob = () => {
  const { setPopup, openPopup } = useDashboardContext();
  const navigate = useNavigation();
  const deleteJob = async () => {
    const { id } = openPopup;
    try {
      const res = await customFetch.delete(`/jobs/${id}`);
      setPopup({ ...openPopup, id: "", openModal: false });
      toast.success("Job deleted successfully!");
      window.location.reload();
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };
  return (
    <>
      <PopupWrapper>
        <div className="popup-inner">
          <h2>Are your sure you want to delete this job?</h2>
          <div className="btn-wrapper">
            <button
              className="btn"
              onClick={() => {
                deleteJob();
              }}
            >
              Sure
            </button>
            <button
              className="btn cancel"
              onClick={() => {
                setPopup({
                  ...openPopup,
                  id: "",
                  openModal: false,
                });
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </PopupWrapper>
    </>
  );
};

export default PopupJob;
