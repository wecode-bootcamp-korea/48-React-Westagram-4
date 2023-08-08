import React from "react";
import Article from "./Article";

export default function Feeds() {
  const feedData = [
    {
      userId: "_waltzfordebby",
      userName: "박동철",
      userImg: "https://img.freepik.com/free-icon/user_318-644324.jpg?w=2000",
      img: "https://www.tu.ac.kr/app/board/attach/image/26576_1666146993000.do",
      content: "광안리 해변에서 찍은 광안대교 야경",
      likes: ["wecode_life", "wecode_bootcamp"],
      comments: [],
    },
    {
      userId: "wecode_bootcamp",
      userName: "wecode-위코드",
      userImg:
        "https://image.rocketpunch.com/company/99609/wecode_logo_1590553949.jpg?s=400x400&t=inside",
      img: "https://static.wanted.co.kr/images/company/10131/l0chwpacltuykugs__1080_790.jpg",
      content: "Wecode 49기 선착순 모집중!",
      likes: ["wecode_life", "_waltzfordebby"],
      comments: [],
    },
  ];

  const whoIsLike = (likes) => {
    if (likes.length === 0) {
      return "좋아요를 누른 사람이 없습니다.";
    } else {
      return `${likes[0]}님 외에 여러 명이 좋아합니다.`;
    }
  };

  return (
    <div className="feeds">
      {feedData.map((feed, i) => (
        <Article
          key={i}
          userId={feed.userId}
          userName={feed.userName}
          userImg={feed.userImg}
          img={feed.img}
          content={feed.content}
          likes={whoIsLike(feed.likes)}
          commentsObj={feed.comments}
        />
      ))}
    </div>
  );
}
