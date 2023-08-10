import React, { useState } from "react";
import {
  PiChatCircleLight,
  PiHeartLight,
  PiBookmarkSimpleLight,
  PiPaperPlaneTiltLight,
} from "react-icons/pi";
import Comment from "./Comment";

export default function Feed({ feed }) {
  const [comments, setComments] = useState(feed.comments);
  const [commentValue, setCommentValue] = useState("");

  const handleComment = (e) => {
    setCommentValue(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentValue.replace(/\s/g, "").length < 1) {
      alert("댓글 내용을 입력해주세요");
    } else {
      setComments([...comments, { userId: "testUser", content: commentValue }]);
    }
    setCommentValue("");
  };

  const whoIsLike = (likes) => {
    if (likes.length === 0) {
      return "좋아요를 누른 사람이 없습니다.";
    } else {
      return `${likes[0]}님 외에 여러 명이 좋아합니다.`;
    }
  };

  return (
    <article className="article">
      <div className="feedUser">
        <div className="feedUserImg">
          <img src={feed.userImg} alt="#" style={{ width: "40px" }} />
        </div>
        <div className="feedUserInfo">
          <h4>{feed.userId}</h4>
          <p>{feed.userName}</p>
        </div>
      </div>
      <div className="feedImages">
        <img className="feedImg" src={feed.img} alt="#" />
      </div>
      <div className="feedBottom">
        <div className="feedBottomInfo">
          <div className="feedBottomInfoLeft"></div>
          <div className="feedBottomInfoRight"></div>
        </div>
        <div className="feedBottomBtns">
          <div className="feedBottomBtnsLeft">
            <PiHeartLight />
            <PiChatCircleLight />
            <PiPaperPlaneTiltLight />
          </div>
          <div className="feedBottomBtnsRight">
            <PiBookmarkSimpleLight />
          </div>
        </div>
        <div className="feedBottomWhoIsLike">
          <p>{whoIsLike(feed.likes)}</p>
        </div>
        <div className="feedBottomContent">
          <p>
            <span>{feed.userId}</span>
            {feed.content}
          </p>
        </div>
        <div className="feedBottomInput">
          <form className="commentSubmit" action="" method="">
            <input
              type="text"
              placeholder="댓글 달기"
              onChange={handleComment}
              value={commentValue}
              style={{ color: "black" }}
            />
            <button onClick={handleCommentSubmit}>게시</button>
          </form>
          {comments.map((comment, i) => (
            <Comment
              key={i}
              userId={comment.userId}
              content={comment.content}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
