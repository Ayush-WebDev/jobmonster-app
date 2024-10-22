import React from "react";
import Input from "./Input";
const ProfileImage = ({ accept }) => {
  return (
    <>
      <div>
        <input
          style={{ width: "100%" }}
          type={"file"}
          id={"avatar"}
          name={"avatar"}
          accept={accept}
        />
        <div></div>
      </div>
    </>
  );
};

export default ProfileImage;
