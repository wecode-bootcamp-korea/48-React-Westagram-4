import React, { useState, KeyboardEvent } from "react";
import "./Main.scss";

const MainMihye = () => {
  const [commentValue, setCommentValue] = useState();
  const [addToCommentList, setAddToCommentList] = useState([]);

  const onChange = (e) => {
    setCommentValue([e.target.value]);
  };

  const onClick = (e) => {
    let aa = [...addToCommentList];
    aa.push(...commentValue);
    setAddToCommentList(aa);
    setCommentValue("");
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.target.onClick) {
      onClick();
    }
  };
  console.log(commentValue);
  console.log(addToCommentList);
  return (
    <div className="cotainer">
      <nav id="navbar">
        <div className="navbar_home">
          <div className="navber_home_logo_image">
            <img src="\images\mihye\logo.png" alt="logo"></img>
          </div>
          <div className="navbar_home_vertical_line"></div>
          <div className="navber_home_title_image">
            <img
              src="\images\mihye\instagram_logo.png"
              alt="instagram_logo"
            ></img>
          </div>
        </div>

        <input
          className="search_box"
          name="search_box"
          placeholder="검색"
        ></input>

        <ul>
          <li className="navbar_icon_box">
            <img
              className="navbar_icon_compass_image"
              src="\images\mihye\compass.png"
              alt="compass"
            ></img>
          </li>
          <li className="navbar_icon_box">
            <img
              className="navbar_icon_heart"
              src="\images\mihye\heart.png"
              alt="heart"
            ></img>
          </li>
          <li className="navbar_icon_box">
            <img
              className="navbar_icon_reels"
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
              <div className="user_profile_box">
                <img
                  className="user_profile_img"
                  src="\images\mihye\user_profile_image.png"
                  alt="user_profile_image"
                ></img>
                <p className="user_nickname">myeee_jeon</p>
              </div>
            </div>
            <div className="feed_image">
              <img
                src="\images\mihye\feeds_image.png"
                alt="user_feed_image"
              ></img>
            </div>
            <div className="feed_icon_box">
              <div className="feed_icon_left_box">
                <img
                  className="feed_icon_heart"
                  src="\images\mihye\heartRed.png"
                  alt="heratred"
                ></img>
                <img
                  className="feed_icon_bubble"
                  src="\images\mihye\bubble.png"
                  alt="bubble"
                ></img>
                <img
                  className="feed_icon_export"
                  src="\images\mihye\export.png"
                  alt="export"
                ></img>
              </div>
              <div className="feed_icon_right_box">
                <img
                  className="feed_icon_bookmark"
                  src="\images\mihye\bookmark.png"
                  alt="bookmark"
                ></img>
              </div>
            </div>
            <div className="who_liked">jeongmin님 외 10명이 좋아합니다.</div>
            <div className="comment_box">
              <div className="comment">
                {addToCommentList.map((a, i) => {
                  return (
                    <>
                      <p>{addToCommentList[i]}</p>
                    </>
                  );
                })}
              </div>
            </div>
            <input
              type="text"
              className="comment_input"
              placeholder="댓글 달기..."
              onChange={onChange}
              value={commentValue}
              onKeyPress={handleKeyPress}
            ></input>
            <button onClick={onClick}>확인</button>
          </article>
        </div>
        <div className="main_right_box">
          <div className="my_account_profile_wrap">
            <img
              className="my_account_profile_image"
              src="\images\mihye\user_profile_image.png"
              alt="my_account"
            ></img>

            <p className="my_account_profile_nickname">myeee_jeon</p>
          </div>
          <div className="story_list">
            <p>스토리~~~~~~~~~~~~</p>
            <p>스토리~~~~~~~~~~~~</p>
            <p>스토리~~~~~~~~~~~~</p>
          </div>
          <div className="commend_list">
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
