import React from "react";
import "./Main.scss";
import { FOOTER_INFO_LIST } from "./data";

const Footer = () => {
  return (
    <footer>
      <ul className="footerList">
        {FOOTER_INFO_LIST.map((info) => (
          <li key={info.id} className="footerListItem">
            <a href={info.link}>{info.text}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};
export default Footer;
