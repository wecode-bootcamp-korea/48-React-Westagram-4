import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import "./Login.scss";

export default function LoginDongcheol() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    userId: "",
    userPw: "",
  });

  const handleInput = (e) => {
    const { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const isValid = userInfo.userId.includes("@") && userInfo.userPw.length > 4;
  // const color = isValid ? "#3897f0" : "lightgrey";

  return (
    <>
      <Nav />
      <div className="loginPage">
        <div className="login">
          <div className="logo">
            <img src="/images/dongcheol/instagram_logo.png" alt="instagram" />
          </div>
          <form action="/login" method="POST">
            <input
              type="text"
              name="userId"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={handleInput}
              value={userInfo.userId}
              required
            />
            <input
              type="password"
              name="userPw"
              placeholder="비밀번호"
              onChange={handleInput}
              value={userInfo.userPw}
              required
            />
            <input
              className={isValid ? "loginBtn btnActive" : "loginBtn"}
              onClick={() => {
                navigate("/dongcheol-main");
              }}
              type="submit"
              value="로그인"
              disabled={!isValid}
            />
          </form>
          <Link className="findPw" to="/">
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
