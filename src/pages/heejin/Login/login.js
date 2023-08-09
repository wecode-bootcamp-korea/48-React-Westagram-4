import React from "react";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../../../styles/reset.scss";
import "../../../styles/common.scss";
import "./Login.scss";



const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");

   const saveUserId = (e) => {
    setUserId(e.target.value);
    console.log(userId);
   }

   const saveUserPw = (e) => {
    setUserPw(e.target.value);
    console.log(userPw);
   }


  const goToMain = () => {
    navigate('/heejin-main');
  };
  return (
    <div className="login">
      <div className="loginWrap">
        <div className="logo">
          <h1>Westagram</h1>
        </div>
        <form>
          <div className="info">
            <input 
            id="userId"
            type="text" 
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
            />
            <input 
            id="userPW"
            type="password" 
            placeholder="비밀번호" 
            onChange={saveUserPw}
            />
            
          </div>
          <div className="button">
            <button className="loginBtn" onClick={goToMain}>
              로그인
            </button>
          </div>
        </form>
        <div className="find">
          <Link to="/Main" className="findLink">비밀번호를 잊으셨나요?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;