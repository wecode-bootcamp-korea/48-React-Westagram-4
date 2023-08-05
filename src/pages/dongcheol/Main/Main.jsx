import React from "react";
import "./Main.scss";
import Feeds from "../components/Feeds";
import MainRight from "../components/MainRight";
import Nav from "../components/Nav/Nav";

const MainDongcheol = () => {
  return (
    <>
      <Nav />
      <main className="main">
        <Feeds />
        <MainRight />
      </main>
    </>
  );
};

export default MainDongcheol;
