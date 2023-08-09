import React, { useRef } from "react";
import "./Main.scss";
import { useState } from "react";
import Comment from "./components/Comment";
import User from "./components/User";
import { FOOTER_INFO_LIST } from "./data";

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [commentList, setCommentList] = useState([]);

  //**input state 변경 **/
  const saveInputValue = (event) => {
    setInputValue(event.target.value);
  };

  //inpuuValue 유효하면 게시 버튼 등장
  const isCommentInput = inputValue;

  //**댓글 추가 기능 **/
  const makeComment = (event) => {
    const commentEl = {
      id: "wecode",
      comment: inputValue,
    };
    setCommentList([...commentList, commentEl]);
  };

  return (
    <div className="main">
      <nav className="nav">
        <a className="logo_wrap" href="/">
          <h1 className="logo">westagram</h1>
        </a>

        <div className="interface ">
          <div className="menu_element">
            <a href="/">
              <div className="icon home_icon"></div>
              <span className="icon_text">홈</span>
            </a>
          </div>

          <div className="menu_element">
            <a href="/">
              <div className="icon home_icon"></div>
              <div className="icon_text">검색</div>
            </a>
          </div>

          <div className="menu_element">
            <a href="/">
              <div className="icon home_icon"></div>
              <span className="icon_text">탐색</span>
            </a>
          </div>

          <div className="menu_element">
            <a href="/">
              <div className="icon home_icon"></div>
              <span className="icon_text">릴스</span>
            </a>
          </div>

          <div className="menu_element">
            <a href="/">
              <div className="icon home_icon"></div>
              <span className="icon_text">메세지</span>
            </a>
          </div>

          <div className="menu_element">
            <a href="/">
              <div className="icon home_icon"></div>
              <span className="icon_text">알림</span>
            </a>
          </div>

          <div className="menu_element">
            <a href="/">
              <div className="icon home_icon"></div>
              <span className="icon_text">프로필</span>
            </a>
          </div>
        </div>
        <div className="hambuger_bar">
          <div className="icon more_icon"></div>
          <span className="icon_text">더 보기</span>
        </div>
      </nav>

      <div className="main_wrap">
        <div className="blank"></div>
        <div className="feeds">
          {/* <Feed /> */}
          <div className="article">
            <div className="article_top">
              <div className="left">
                <div className="profile_img "></div>
                <div className="margin_left">
                  <span className="user_id text_bold">wecode_zzang</span>
                  <span className="date"> · 1일</span>
                </div>
              </div>

              <div className="right icon_m more_icon"></div>
            </div>

            <div className="main_img">
              <div className="img_src"></div>
            </div>

            <div className="article_text_wrap">
              <div className="article_icon margin_bottom">
                <div className="left">
                  <div className="icon margin_right heart_icon"></div>

                  <div className="icon margin_right talk_icon"></div>

                  <div className="icon margin_right airplane_icon"></div>
                </div>

                <div className="icon_ss bookmark_icon"></div>
              </div>

              <div className="text_s text_bold margin_bottom">좋아요 15개</div>
              <div className="space_between">
                <div className="text_s">secrecy_shhhh 무더운 이 여름</div>
                <div className="heart_icon icon_ss"></div>
              </div>
              <div className="allComment">
                <a className="text_s text_gray" href="/">
                  댓글 4개 모두 보기
                </a>
              </div>
              <Comment commentValue={commentList} inputValue={inputValue} />

              <div className="comment_area">
                <form className="comment_area">
                  <input
                    id="textarea"
                    value={inputValue}
                    onChange={saveInputValue}
                    rows={1}
                    className="comment_input text_s text_gray"
                    placeholder="댓글 달기..."
                  />
                  {isCommentInput ? (
                    <button
                      type="button"
                      onClick={makeComment}
                      className="inputButton text_bold"
                    >
                      게시
                    </button>
                  ) : null}
                </form>

                <div className="heart_icon icon_ss"></div>
              </div>
            </div>
          </div>
          <div className="article">
            <div className="article_top">
              <div className="left">
                <div className="profile_img "></div>
                <div className="margin_left">
                  <span className="user_id text_bold">wecode_zzang</span>
                  <span className="date"> · 1일</span>
                </div>
              </div>

              <div className="right icon_m more_icon"></div>
            </div>

            <div className="main_img">
              <div className="img_src"></div>
            </div>

            <div className="article_text_wrap">
              <div className="article_icon margin_bottom">
                <div className="left">
                  <div className="icon margin_right heart_icon"></div>

                  <div className="icon margin_right talk_icon"></div>

                  <div className="icon margin_right airplane_icon"></div>
                </div>

                <div className="icon_ss bookmark_icon"></div>
              </div>

              <div className="text_s text_bold margin_bottom">좋아요 15개</div>
              <div className="space_between">
                <div className="text_s">secrecy_shhhh 무더운 이 여름</div>
                <div className="heart_icon icon_ss"></div>
              </div>
              <div className="allComment">
                <a className="text_s text_gray" href="/">
                  댓글 4개 모두 보기
                </a>
              </div>
              <Comment commentValue={commentList} inputValue={inputValue} />

              <div className="comment_area">
                <form className="comment_area">
                  <input
                    id="textarea"
                    value={inputValue}
                    onChange={saveInputValue}
                    rows={1}
                    className="comment_input text_s text_gray"
                    placeholder="댓글 달기..."
                  />
                  {isCommentInput ? (
                    <button
                      type="button"
                      onClick={makeComment}
                      className="inputButton text_bold"
                    >
                      게시
                    </button>
                  ) : null}
                </form>

                <div className="heart_icon icon_ss"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="main_right">
          {/* 상단 나의 계정 */}
          <div className="account_wrap">
            <div className="left">
              <div className="profile_img_big "></div>
              <div className="margin_left column">
                <span className="user_id text_bold">wecode_zzang</span>
                <span className="text_s text_gray">codekim</span>
              </div>
            </div>
            <span className="right text_blue text_ss text_bold"> 전환</span>
          </div>

          <div className="recommend flex_space_between">
            <span className="text_s text_semibold text_gray ">
              회원님을 위한 추천
            </span>
            <span className="text_ss text_semibold">모두 보기</span>
          </div>
          {/* 추천계정목록 */}
          <div id="userContentWrap">
            {/* 아래 유저들 */}
            <User />
            <User />
            <User />
            <User />
            <User />
          </div>
          <div className="info">
            <ul>
              {FOOTER_INFO_LIST.map((i, index) => (
                <a key={i.id} className="text_ss text_lightgray" href={i.link}>
                  {i.text}
                </a>
              ))}
            </ul>
            <span className="text_ss text_lightgray">
              © 2023 Instagram from Meta
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
