import "../Main.scss";
import { useState } from "react";

const User = () => {
  return (
    <>
      <div className="user_el">
        <div className="left">
          <div className="profile_img"></div>
          <div className="margin_left column">
            <div className="id_wrap">
              <span className="user_id text_bold">wecode_zzang</span>
              <div className="right icon_s badge_icon"></div>
            </div>

            <span className="text_ss text_gray">인기</span>
          </div>
        </div>
        <span className="right text_blue text_ss text_bold">팔로우</span>
      </div>
    </>
  );
};

export default User;
