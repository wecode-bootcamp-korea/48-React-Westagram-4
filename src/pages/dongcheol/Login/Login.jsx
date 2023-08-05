import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

export default function LoginDongcheol() {
  return (
    <div className="login-page">
      <div className="login">
        <div className="logo">
          <img src="/images/dongcheol/instagram_logo.png" alt="instagram" />
        </div>
        <form action="/login" method="post">
          <input
            type="text"
            name="username"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            required
          />
          <Link to="/main">
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              required
            />
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
  );
}
