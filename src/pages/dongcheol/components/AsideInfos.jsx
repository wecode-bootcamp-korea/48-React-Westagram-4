import React from "react";

const ASIDE_INFOS = [
  "소개",
  "도움말",
  "홍보 센터",
  "API",
  "채용정보",
  "개인정보처리방침",
  "약관",
  "위치",
  "인기 계정",
  "해시태그",
  "언어",
];

export default function AsideInfos() {
  return (
    <>
      <div className="asideInfos">
        {ASIDE_INFOS.map((info, i) => (
          <p className="asideInfosItem" key={i}>
            {info}
          </p>
        ))}
      </div>
      <p className="companyInfo">© 2023 WESTAGRAM FROM WETA</p>
    </>
  );
}
