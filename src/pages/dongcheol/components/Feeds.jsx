import React from "react";
import Article from "./Article";

export default function Feeds() {
  return (
    <div className="feeds">
      <Article
        userId={"_waltzfordebby"}
        userName={"박동철"}
        userImg={
          "https://file.notion.so/f/s/d5ab9838-845a-405e-840d-516c37f27183/kp.jpg?id=19092177-f7de-4949-b44b-482b580e3a51&table=block&spaceId=4b97eaca-7938-4c43-b27c-a0c55795a841&expirationTimestamp=1691136000000&signature=ZPrvjqM2g1Y6ImWejMwHw_ac2g-x5tZjcqScAgTEI9k&downloadName=kp.jpg"
        }
        img={
          "https://www.tu.ac.kr/app/board/attach/image/26576_1666146993000.do"
        }
        content={"광안리 해변에서 찍은 광안대교 야경"}
        likes={"wecode_life"}
      />
      <Article
        userId={"wecode_bootcamp"}
        userName={"Wecode-위코드"}
        userImg={
          "https://image.rocketpunch.com/company/99609/wecode_logo_1590553949.jpg?s=400x400&t=inside"
        }
        img={
          "https://static.wanted.co.kr/images/company/10131/l0chwpacltuykugs__1080_790.jpg"
        }
        content={"Wecode 49기 선착순 모집중!"}
        likes={"wecode_life"}
      />
    </div>
  );
}
