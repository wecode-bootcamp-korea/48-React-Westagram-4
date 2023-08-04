import React from "react";
import "./Main.scss";

const Main = () => {
  return (
    <div className="cotainer">
      <nav id="navbar">
        <div className="navbar_home">
          <div className="navber_home_logo_image">
            <img src="\image\logo.png" alt="logo"></img>
          </div>
          <div className="navbar_home_vertical_line"></div>
          <div className="navber_home_title_image">
            <img src="\image\instagram_logo.png" alt="instagram_logo"></img>
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
              src="\image\compass.png"
              alt="compass"
            ></img>
          </li>
          <li className="navbar_icon_box">
            <img
              className="navbar_icon_heart"
              src="\image\heart.png"
              alt="heart"
            ></img>
          </li>
          <li className="navbar_icon_box">
            <img
              className="navbar_icon_reels"
              src="\image\reels.png"
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
                  src="\image\user_profile_image.png"
                  alt="user_profile_image"
                ></img>
                <p className="user_nickname">myeee_jeon</p>
              </div>
            </div>
            <div className="feed_image">
              <img src="\image\feeds_image.png" alt="user_feed_image"></img>
            </div>
            <div className="feed_icon_box">
              <div className="feed_icon_left_box">
                <img
                  className="feed_icon_heart"
                  src="\image\heartRed.png"
                  alt="heratred"
                ></img>
                <img
                  className="feed_icon_bubble"
                  src="\image\bubble.png"
                  alt="bubble"
                ></img>
                <img
                  className="feed_icon_export"
                  src="\image\export.png"
                  alt="export"
                ></img>
              </div>
              <div className="feed_icon_right_box">
                <img
                  className="feed_icon_bookmark"
                  src="\image\bookmark.png"
                  alt="bookmark"
                ></img>
              </div>
            </div>
            <div className="who_liked">jeongmin님 외 10명이 좋아합니다.</div>
            <div className="comment_box">
              <div className="comment">
                <p>canon_mj 이미지가 좋으시네요~ 혹시 DM 가능하실까요?</p>
                <p>aadg_eee 캠핑장 너무 예쁘다ㅠㅠ</p>
              </div>
            </div>
            <input
              type="text"
              className="comment_input"
              placeholder="댓글 달기..."
            ></input>
          </article>
        </div>
        <div className="main_right_box">
          <div className="my_account_profile_wrap">
            <img
              className="my_account_profile_image"
              src="\image\user_profile_image.png"
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

export default Main;
