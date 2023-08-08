import React, { useState } from "react";
import {
  PiChatCircleLight,
  PiHeartLight,
  PiBookmarkSimpleLight,
  PiPaperPlaneTiltLight,
} from "react-icons/pi";
import Comment from "./Comment";

export default function Article({
  likes,
  userId,
  userName,
  userImg,
  img,
  content,
  commentsObj,
}) {
  const [comments, setComments] = useState(commentsObj);
  const [commentValue, setCommentValue] = useState("");
  const handleComment = (e) => {
    setCommentValue(e.target.value);
  };
  const handleCommentSubmit = () => {
    setCommentValue("");
    if (commentValue.replace(/\s/g, "").length < 1) {
      alert("댓글 내용을 입력해주세요");
    } else {
      setComments([...comments, { userId: "testUser", content: commentValue }]);
    }
  };

  return (
    <article className="article">
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
          <p>{likes}</p>
        </div>
        <div className="fb-content">
          <p>
            <span>{userId}</span>
            {content}
          </p>
        </div>
        <div className="fb-input">
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
              userId={comment.userId}
              content={comment.content}
              key={i}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
