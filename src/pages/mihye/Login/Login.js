import React, { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

const LoginMihye = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    //   fetch("http://10.58.52.196:3000/users/login_practice", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json;charset=utf-8",
    //     },
    //     body: JSON.stringify({
    //       email: userDataValue.inputId,
    //       password: userDataValue.inputPassword,
    //     }),
    //   })
    //     .then((res) => {
    //       if (res.ok) {
    //         alert("회원가입 성공!");

    //         return;
    //       }

    //       return res.json();
    //     })
    //     .then((data) => {
    //       console.log(data);
    //       if (
    //         data.message ===
    //         "Duplicate entry 'algp1205@naver.com' for key 'users.users_email_ukey'"
    //       ) {
    //         localStorage.setItem("TOKEN", data.token);
    //         alert("로그인 성공");
    //         navigate("/mihye-main");
    //       } else {
    //         alert("로그인 실패");
    //       }
    //     });
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
          <div className="loginBox">
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
              className="loginButton"
              onClick={goToMain}
              disabled={isVaild()}
            >
              로그인
            </button>
          </div>
        </div>
        <div className="buttonText">
          <p>비밀번호를 잊으셨나요?</p>
        </div>
      </div>
    </div>
  );
};

export default LoginMihye;
