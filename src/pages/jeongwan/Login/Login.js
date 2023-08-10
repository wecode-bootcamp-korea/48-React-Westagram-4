import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // 메인으로 가는 함수
  const navigate = useNavigate();

  //사용자 입력 데이터 저장
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const goToMain = (e) => {
    navigate("/jeongwan-main");
  };

  const saveUserId = (event) => {
    setId(event.target.value);
  };

  const saveUserPw = (event) => {
    setPw(event.target.value);
  };

  //유효성 검사 변수
  const validation = id.includes("@") && pw.length >= 5;

  return (
    <div className="login">
      <div id="contentWrap">
        <h1 className="logoName">westagram</h1>

        <form className="inputWrap">
          <input
            className="put"
            type="text"
            name="userName"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
          />
          <input
            className="put"
            type="password"
            placeholder="비밀번호"
            onChange={saveUserPw}
          />

          <input
            className={
              validation ? "submitButton buttonActive" : "submitButton"
            }
            onClick={goToMain}
            type="submit"
            value="로그인"
            disabled={!validation}
            cursor
          />
        </form>

        <a herf="#" className="findPassword">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};

export default Login;
