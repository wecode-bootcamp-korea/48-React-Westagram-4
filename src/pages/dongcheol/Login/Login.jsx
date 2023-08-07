import { useState } from "react";
import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import Nav from "../components/Nav/Nav";

export default function LoginDongcheol() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const saveUserId = (e) => {
    setId(e.target.value);
  };
  const saveUserPw = (e) => {
    setPw(e.target.value);
  };

  return (
    <>
      <Nav />
      <div className="login-page">
        <div className="login">
          <div className="logo">
            <img src="/images/dongcheol/instagram_logo.png" alt="instagram" />
          </div>
          <form action="/login" method="POST">
            <input
              type="text"
              name="username"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={saveUserId}
              value={id}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              onChange={saveUserPw}
              value={pw}
              required
            />
            <Link to="/dongcheol-main">
              <input type="submit" value="로그인" />
            </Link>
          </form>
          <Link className="find-pw" to="/">
            비밀번호를 잊으셨나요?
          </Link>
          <br />
          <Link className="toSignUp" to="/signup">
            회원가입
          </Link>
        </div>
      </div>
    </>
  );
}
