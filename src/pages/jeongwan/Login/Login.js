import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // 메인으로 가는 함수
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/jeongwan-main");
  };

  //사용자 입력 데이터 저장

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const saveUserId = (event) => {
    // console.log(event.target.value);
    setId(event.target.value);
    // console.log(event.target.value);
  };

  const saveUserPw = (event) => {
    setPw(event.target.value);
    // console.log(event.target.value);
  };

  //유효성 검사 변수
  const validation = id.includes("@") && pw.length >= 5;

  return (
    <div className="login">
      <div id="content_wrap">
        <h1 className="logo_name">westagram</h1>

        <form className="input_wrap">
          <input
            className="put"
            type="text"
            name="userName"
            // value={id}
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
          />
          <input
            className="put"
            type="password"
            // value={pw}
            placeholder="비밀번호"
            onChange={saveUserPw}
          />

          <input
            className={
              validation ? "submit_button button_active" : "submit_button"
            }
            onClick={goToMain}
            type="submit"
            value="로그인"
            disabled={!validation}
            // style={{ backgroundColor: validation ? "#67b5fa" : "#b5cde2" }}
          />
        </form>

        <a herf="#" className="find_password">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};

export default Login;
