import React from "react";
import { FiSearch } from "react-icons/fi";
import { PiHeartLight, PiCompassLight, PiUserLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const goTo = (adress) => {
    navigate(adress);
  };

  return (
    <nav>
      <div className="navLeft">
        <img
          onClick={() => {
            goTo("/dongcheol-login");
          }}
          src="/images/dongcheol/insta_mini_logo.png"
          alt="instagram"
        />
        <div className="logoLine"></div>
        <img
          onClick={() => {
            goTo("/dongcheol-main");
          }}
          src="/images/dongcheol/instagram_logo.png"
          alt="instagram"
        />
      </div>
      <div className="navCenter">
        <FiSearch className="searchIcon" />
        <input type="text" placeholder="검색" />
      </div>
      <div className="navRight">
        <PiHeartLight />
        <PiCompassLight />
        <PiUserLight />
      </div>
    </nav>
  );
}
