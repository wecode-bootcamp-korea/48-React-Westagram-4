import "../Main.scss";
import { useState } from "react";

const User = () => {
  return (
    <>
      <div className="userEl">
        <div className="left">
          <div className="profileImg"></div>
          <div className="marginLeft column">
            <div className="idWrap">
              <span className="userId textBold">wecode_zzang</span>
              <div className="right iconS badgeIcon"></div>
            </div>

            <span className="textSs textGray">인기</span>
          </div>
        </div>
        <span className="right textBlue textSs textBold">팔로우</span>
      </div>
    </>
  );
};

export default User;
