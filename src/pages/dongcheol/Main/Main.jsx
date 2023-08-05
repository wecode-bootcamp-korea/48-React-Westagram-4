import React from "react";
import "./Main.css";
import Feeds from "../components/Feeds";
import MainRight from "../components/MainRight";

const MainDongcheol = () => {
  return (
    <main className="main">
      <Feeds />
      <MainRight />
    </main>
  );
};

export default MainDongcheol;
