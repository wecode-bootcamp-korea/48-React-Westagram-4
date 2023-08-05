import React from "react";
import UserCard from "./UserCard";

export default function MainRight() {
  const lastSeenTimestamp = new Date();
  const lastSeenTimestamp2 = "2023-08-05T12:34:56";

  return (
    <div className="main-right">
      <div className="mr-category">
        <p>스토리</p>
        <h4>모두보기</h4>
      </div>
      <UserCard
        userImg={"https://img.freepik.com/free-icon/user_318-644324.jpg?w=2000"}
        userId={"_waltzfordebby"}
        lastSeenTimestamp={lastSeenTimestamp}
      />
      <UserCard
        userImg={
          "https://image.rocketpunch.com/company/99609/wecode_logo_1590553949.jpg?s=400x400&t=inside"
        }
        userId={"wecode_bootcamp"}
        lastSeenTimestamp={lastSeenTimestamp2}
      />
    </div>
  );
}
