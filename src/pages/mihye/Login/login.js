import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const LoginMihye = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/mihye-main");
  };
  const [idValue, setIdValue] = useState("");
  const [passwordValue, setPassword] = useState("");
  let saveUserId = (e) => {
    setIdValue(e.target.value);
    console.log(idValue);
  };

  let saveUserpassword = (e) => {
    setPassword(e.target.value);
    console.log(passwordValue);
  };

  return (
    <div className="login">
      <div className="wrap">
        <div className="logo">
          <p>Westagram</p>
        </div>
        <div className="login_box">
          <form action="sigh_in.html" method="get" id="form_wrap">
            <div className="id_box">
              <input
                className="input_id"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={saveUserId}
              ></input>
            </div>
            <div className="password_box">
              <input
                className="input_password"
                type="password"
                placeholder="비밀번호"
                onChange={saveUserpassword}
              ></input>
            </div>

            <button type="submit" className="login_button" onClick={goToMain}>
              로그인
            </button>
          </form>
        </div>
        <div className="bottom_text">
          <p>비밀번호를 잊으셨나요?</p>
        </div>
      </div>
    </div>
  );
};

export default LoginMihye;
