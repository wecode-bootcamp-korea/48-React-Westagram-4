import React from "react";

export default function UserCard({ userImg, userId, userTime }) {
  return (
    <div className="userCard">
      <div className="userImg">
        <img src={userImg} alt="#" style={{ width: "40px" }} />
      </div>
      <div className="userInfo">
        <h4>{userId}</h4>
        <p>{userTime}</p>
      </div>
    </div>
  );
}
