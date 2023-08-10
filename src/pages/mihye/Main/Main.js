import React, { useState, KeyboardEvent, useEffect } from "react";
import "./Main.scss";
import Footer from "./Footer";

const CommentComponent = (props) => (
  <div className="commentData">
    <img className="commentUserProfileImg" src={props.userProfile}></img>
    <p className="commentUserName">{props.userName}</p>
    <p>{props.comment}</p>
  </div>
);

const Feed = (props) => {
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.target.onClick) {
      onClick();
    }
  };

  return (
    <div className="feed">
      <article>
        <div className="user">
          <div className="userProfileBox">
            <img
              className="userProfileImg"
              src={props.feedUserProfile}
              alt="userProfileImage"
            ></img>
            <p className="userNickname">{props.feedUserName}</p>
          </div>
        </div>
        <div className="feedImage">
          <img src={props.feedImages} alt="userFeedImage"></img>
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
        <div className="whoLiked">
          jeongmin님 외 {props.feedLikeCount}명이 좋아합니다.
        </div>
        <div className="contentBox">{props.feedContent}</div>
        <div className="commentBox">
          <div className="comment">
            {props.feedCommentsArray.map((w) => {
              return (
                <CommentComponent
                  key={w.commentId}
                  comment={w.comment}
                  userName={w.userName}
                  userProfile={w.userProfile}
                ></CommentComponent>
              );
            })}
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
        <label className="commentLabelTag">
          <input
            type="text"
            className="commentInput"
            placeholder="댓글 달기..."
            onChange={onChange}
            value={commentValue}
            onKeyPress={handleKeyPress}
          ></input>
          <button className="commentAddButton" onClick={onClick}>
            확인
          </button>
        </label>
      </article>
    </div>
  );
};

const Feeds = () => {
  const [feedDataList, setFeedDataList] = useState();

  useEffect(() => {
    fetch("/data/feedsData.json", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFeedDataList(data);
      });
  }, []);
  //[ {1번데이터}, {2번데이터}, {3번데이터}]
  return (
    <div className="feeds">
      {feedDataList?.data.map((feedData, i) => {
        return (
          <Feed
            feedData={feedData}
            feedId={feedData.id}
            feedUserName={feedData.userName}
            feedUserProfile={feedData.userProfile}
            feedLocation={feedData.location}
            feedImages={feedData.feedImages}
            feedLikeCount={feedData.likeCount}
            feedContent={feedData.content}
            feedCommentsArray={feedData.comments}
            feedCreatedAt={feedData.createdAt}
          ></Feed>
        );
      })}
    </div>
  );
};

const MainMihye = (props) => {
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
        <Feeds></Feeds>

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
            <div className="myAccountProfileWrap">
              <img
                className="myAccountProfileImage"
                src="\images\mihye\user_profile_image.png"
                alt="myAccount"
              ></img>

              <p className="myAccountProfileNickname">myeee_jeon</p>
            </div>
            <div className="myAccountProfileWrap">
              <img
                className="myAccountProfileImage"
                src="\images\mihye\user_profile_image.png"
                alt="myAccount"
              ></img>

              <p className="myAccountProfileNickname">myeee_jeon</p>
            </div>
            <div className="myAccountProfileWrap">
              <img
                className="myAccountProfileImage"
                src="\images\mihye\user_profile_image.png"
                alt="myAccount"
              ></img>

              <p className="myAccountProfileNickname">myeee_jeon</p>
            </div>
          </div>
          <div className="commendList">
            <div className="myAccountProfileWrap">
              <img
                className="myAccountProfileImage"
                src="\images\mihye\user_profile_image.png"
                alt="myAccount"
              ></img>

              <p className="myAccountProfileNickname">myeee_jeon</p>
            </div>
            <div className="myAccountProfileWrap">
              <img
                className="myAccountProfileImage"
                src="\images\mihye\user_profile_image.png"
                alt="myAccount"
              ></img>

              <p className="myAccountProfileNickname">myeee_jeon</p>
            </div>
          </div>
          <div className="footerBox">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMihye;
