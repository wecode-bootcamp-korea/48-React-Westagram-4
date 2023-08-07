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
    setId(event.target.value);
    // console.log(event.target.value);
  };

  const saveUserPw = (event) => {
    setPw(event.target.value);
    // console.log(event.target.value);
  };

  // 버튼 활성화 여부 함수

  // 유효성 검사 함수를 만든다.
  // 인라인 스타일에 유효성검사 함수가 ture일때 값이 바뀌게 만든다.

  // const validation = () => {
  //   if (id.includes("@") && pw.length >= 5) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };           이게 왜 안되는지 잘 모르겠다...

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
            value={id}
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
          ></input>
          <input
            className="put"
            type="password"
            value={pw}
            placeholder="비밀번호"
            onChange={saveUserPw}
          ></input>

          <input
            className="login_button"
            onClick={goToMain}
            type="submit"
            value="로그인"
            disabled={!validation} //? true : false}
            style={{ backgroundColor: validation ? "#67b5fa" : "#b5cde2" }}
            // // validation ? console.log("true") : console.log("false")
            // // ? setButtonColor("#67b5fa")
            // // : setButtonColor("#b5cde2")
            // ? "backgroundColor : #67b5fa"
            // : "backgroundColor : #b5cde2"
          ></input>
        </form>

        <a herf="#" className="find_password">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};

export default Login;
