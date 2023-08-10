import "../Main.scss";
import { useEffect, useState } from "react";
import Comment from "../components/Comment";

const Feed = ({
  commentList,
  inputValue,
  saveInputValue,
  isCommentInput,
  makeComment,
}) => {
  // useEffect(fetch("/data/feedData.json"), []);
  return (
    <>
      <div className="article">
        <div className="articleTop">
          <div className="left">
            <div className="profileImg "></div>
            <div className="marginLeft">
              <span className="userId textBold">wecode_zzang</span>
              <span className="date"> · 1일</span>
            </div>
          </div>

          <div className="right iconM moreIcon"></div>
        </div>

        <div className="mainImg">
          <div className="imgSrc"></div>
        </div>

        <div className="articleTextWrap">
          <div className="articleIcon marginBottom">
            <div className="left">
              <div className="icon marginRight heartIcon"></div>
              <div className="icon marginRight talkIcon"></div>
              <div className="icon marginRight airplaneIcon"></div>
            </div>

            <div className="iconSs bookmarkIcon"></div>
          </div>

          <div className="textS textBold marginBottom">좋아요 15개</div>
          <div className="spaceBetween">
            <div className="textS">secrecy_shhhh 무더운 이 여름</div>
            <div className="heartIcon iconSs"></div>
          </div>
          <div className="allComment">
            <a className="textS textGray" href="/">
              댓글 4개 모두 보기
            </a>
          </div>
          <Comment commentValue={commentList} inputValue={inputValue} />

          <div className="commentArea">
            <form className="commentArea">
              <input
                id="textarea"
                value={inputValue}
                onChange={saveInputValue}
                rows={1}
                className="commentInput textS textGray"
                placeholder="댓글 달기..."
              />
              {isCommentInput ? (
                <button
                  type="button"
                  onClick={makeComment}
                  className="inputButton textBold"
                >
                  게시
                </button>
              ) : null}
            </form>

            <div className="heartIcon iconSs"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
