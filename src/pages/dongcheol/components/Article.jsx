import React from "react";
import {
  PiChatCircleLight,
  PiHeartLight,
  PiBookmarkSimpleLight,
  PiPaperPlaneTiltLight,
} from "react-icons/pi";

export default function Article({
  likes,
  userId,
  userName,
  userImg,
  img,
  content,
}) {
  return (
    <article>
      <div className="feed-user">
        <div className="fu-img">
          <img src={userImg} alt="#" style={{ width: "40px" }} />
        </div>
        <div className="fu-info">
          <h4>{userId}</h4>
          <p>{userName}</p>
        </div>
      </div>
      <div className="feed-images">
        <img className="feed-img" src={img} alt="#" />
      </div>
      <div className="feed-bottom">
        <div className="fb-info">
          <div className="fbi-left"></div>
          <div className="fbi-right"></div>
        </div>
        <div className="fb-btns">
          <div className="btns-left">
            <PiHeartLight />
            <PiChatCircleLight />
            <PiPaperPlaneTiltLight />
          </div>
          <div className="btns-right">
            <PiBookmarkSimpleLight />
          </div>
        </div>
        <div className="fb-whoLike">
          <p>{likes}님 외에 여러 명이 좋아합니다.</p>
        </div>
        <div className="fb-content">
          <p>
            <span>{userId}</span>
            {content}
          </p>
        </div>
        <div className="fb-input">
          <input type="text" placeholder="댓글 달기" />
        </div>
      </div>
    </article>
  );
}
