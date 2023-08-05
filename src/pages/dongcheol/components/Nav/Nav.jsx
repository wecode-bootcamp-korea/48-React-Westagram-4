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
      <div className="nav-left">
        <img
          onClick={() => {
            goTo("/");
          }}
          src="/images/insta_mini_logo.png"
          alt="instagram"
        />
        <div className="logo-line"></div>
        <img
          onClick={() => {
            goTo("/main");
          }}
          src="/images/instagram_logo.png"
          alt="instagram"
        />
      </div>
      <div className="nav-center">
        <FiSearch className="search-icon" />
        <input type="text" placeholder="검색" />
      </div>
      <div className="nav-right">
        <PiHeartLight />
        <PiCompassLight />
        <PiUserLight />
      </div>
    </nav>
  );
}
