import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main");
  };

  return (
    <div className="login">
      <div id="content_wrap">
        <h1 className="logo_name">westagram</h1>

        <form className="input_wrap">
          <input
            className="put"
            type="text"
            name="userName"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          ></input>
          <input className="put" type="password" placeholder="비밀번호"></input>
          {/* <Link to="/Main"> */}
          <input
            className="login_button"
            onClick={goToMain}
            type="submit"
            value="로그인"
          ></input>
          {/* </Link> */}
        </form>

        <a herf="#" className="find_password">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};

export default Login;
