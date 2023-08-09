import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const LoginMihye = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/mihye-main");
  };

  const [userDataValue, setUserDataValue] = useState({
    inputId: "",
    inputPassword: "",
  });

  const handleInput = (e) => {
    const { className, value } = e.target;
    setUserDataValue({ ...userDataValue, [className]: value });
  };

  let isVaild = () => {
    return userDataValue.inputId.includes("@") &&
      userDataValue.inputPassword.length >= 5
      ? false
      : true;
  };
  return (
    <div className="loginMihye">
      <div className="loginWrap">
        <div className="logoText">
          <p>Westagram</p>
        </div>
        <div className="login">
          <form action="sighIn.html" method="get" id="formWrap">
            <div className="idBox">
              <input
                className="inputId"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={handleInput}
              ></input>
            </div>
            <div className="passwordBox">
              <input
                className="inputPassword"
                type="password"
                placeholder="비밀번호"
                onChange={handleInput}
              ></input>
            </div>

            <button
              type="submit"
              className="loginButton"
              onClick={goToMain}
              disabled={isVaild()}
            >
              로그인
            </button>
          </form>
        </div>
        <div className="buttonText">
          <p>비밀번호를 잊으셨나요?</p>
        </div>
      </div>
    </div>
  );
};

export default LoginMihye;
