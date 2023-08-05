import React from "react";
import UserCard from "./UserCard";

export default function MainRight() {
  return (
    <div className="main-right">
      <div className="mr-category">
        <p>스토리</p>
        <h4>모두보기</h4>
      </div>
      <UserCard
        userImg={
          "https://file.notion.so/f/s/d5ab9838-845a-405e-840d-516c37f27183/kp.jpg?id=19092177-f7de-4949-b44b-482b580e3a51&table=block&spaceId=4b97eaca-7938-4c43-b27c-a0c55795a841&expirationTimestamp=1691136000000&signature=ZPrvjqM2g1Y6ImWejMwHw_ac2g-x5tZjcqScAgTEI9k&downloadName=kp.jpg"
        }
        userId={"_waltzfordebby"}
        userTime={"12분 전"}
      />
      <UserCard
        userImg={
          "https://image.rocketpunch.com/company/99609/wecode_logo_1590553949.jpg?s=400x400&t=inside"
        }
        userId={"wecode_bootcamp"}
        userTime={"1분 전"}
      />
    </div>
  );
}
