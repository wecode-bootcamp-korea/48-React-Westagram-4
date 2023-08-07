import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const LoginMihye = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/mihye-main");
  };

  let userData = { input_id: "", input_password: "" };

  const [userDataValue, setUserDataValue] = useState(userData);
  const { input_id, input_password } = userDataValue;
  const onClick = (e) => {
    const { className, value } = e.target;
    setUserDataValue({ ...userDataValue, [className]: value });
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
                value={input_id}
                onChange={onClick}
              ></input>
            </div>
            <div className="password_box">
              <input
                className="input_password"
                type="password"
                placeholder="비밀번호"
                value={input_password}
                onChange={onClick}
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
