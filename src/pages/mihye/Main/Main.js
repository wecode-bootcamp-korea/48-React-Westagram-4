import React, { useState, KeyboardEvent } from "react";
import "./Main.scss";

const CommentComponent = (props) => {
  return <p>{props.comment}</p>;
};
const MainMihye = () => {
  const [commentValue, setCommentValue] = useState();
  const [addToCommentList, setAddToCommentList] = useState([]);

  const onChange = (e) => {
    setCommentValue([e.target.value]);
  };

  const onClick = (e) => {
    let newAddToCommentList = [...addToCommentList];
    newAddToCommentList.push(...commentValue);
    setAddToCommentList(newAddToCommentList);
    setCommentValue("");
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.target.onClick) {
      onClick();
    }
  };

  return (
    <div className="cotainer">
      <nav id="navbar">
        <div className="navbarHome">
          <div className="navberHomeLogoImage">
            <img src="\images\mihye\logo.png" alt="logo"></img>
          </div>
          <div className="navbarHomeVerticalLine"></div>
          <div className="navberHomeTitleImage">
            <img
              src="\images\mihye\instagram_logo.png"
              alt="instagramLogo"
            ></img>
          </div>
        </div>

        <input
          className="searchBox"
          name="searchBox"
          placeholder="검색"
        ></input>

        <ul>
          <li className="navbarIconBox">
            <img
              className="navbar_icon_compass_image"
              src="\images\mihye\compass.png"
              alt="compass"
            ></img>
          </li>
          <li className="navbarIconBox">
            <img
              className="navbarIconHeart"
              src="\images\mihye\heart.png"
              alt="heart"
            ></img>
          </li>
          <li className="navbarIconBox">
            <img
              className="navbarIconReels"
              src="\images\mihye\reels.png"
              alt="reels"
            ></img>
          </li>
        </ul>
      </nav>
      <div className="main">
        <div className="feeds">
          <article>
            <div className="user">
              <div className="userProfileBox">
                <img
                  className="userProfileImg"
                  src="\images\mihye\user_profile_image.png"
                  alt="userProfileImage"
                ></img>
                <p className="userNickname">myeee_jeon</p>
              </div>
            </div>
            <div className="feedImage">
              <img
                src="\images\mihye\feeds_image.png"
                alt="userFeedImage"
              ></img>
            </div>
            <div className="feedIconBox">
              <div className="feedIconLeftBox">
                <img
                  className="feedIconHeart"
                  src="\images\mihye\heartRed.png"
                  alt="heratred"
                ></img>
                <img
                  className="feedIconBubble"
                  src="\images\mihye\bubble.png"
                  alt="bubble"
                ></img>
                <img
                  className="feedIconExport"
                  src="\images\mihye\export.png"
                  alt="export"
                ></img>
              </div>
              <div className="feedIconRightBox">
                <img
                  className="feedIconBookmark"
                  src="\images\mihye\bookmark.png"
                  alt="bookmark"
                ></img>
              </div>
            </div>
            <div className="whoLiked">jeongmin님 외 10명이 좋아합니다.</div>
            <div className="commentBox">
              <div className="comment">
                {addToCommentList.map((comment, index) => {
                  return (
                    <CommentComponent
                      comment={comment}
                      key={index}
                    ></CommentComponent>
                  );
                })}
              </div>
            </div>
            <input
              type="text"
              className="commentInput"
              placeholder="댓글 달기..."
              onChange={onChange}
              value={commentValue}
              onKeyPress={handleKeyPress}
            ></input>
            <button onClick={onClick}>확인</button>
          </article>
        </div>
        <div className="mainRightBox">
          <div className="myAccountProfileWrap">
            <img
              className="myAccountProfileImage"
              src="\images\mihye\user_profile_image.png"
              alt="myAccount"
            ></img>

            <p className="myAccountProfileNickname">myeee_jeon</p>
          </div>
          <div className="storyList">
            <p>스토리~~~~~~~~~~~~</p>
            <p>스토리~~~~~~~~~~~~</p>
            <p>스토리~~~~~~~~~~~~</p>
          </div>
          <div className="commendList">
            <p>추천친구~~~~~~~~~~~</p>
            <p>추천친구~~~~~~~~~~~</p>
            <p>추천친구~~~~~~~~~~~</p>
            <p>추천친구~~~~~~~~~~~</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMihye;
