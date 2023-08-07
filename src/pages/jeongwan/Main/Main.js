import React, { useRef } from "react";
import "./Main.scss";
import { useState } from "react";

const Main = () => {
  // const menu_element = [{
  //   id : 1,
  //   class : menu_element
  //   img : ""
  //   title : 홈
  // },{}]

  // menu_element.map(item,index){
  //   console.log(item);

  //   <div>
  //     <a>
  //       <div></div>
  //       <span></span>
  //     </a>
  //   </div>
  // };

  // 댓글 수에 따라 높이 자동 조절

  // const textarea = useRef;

  // const handleResizeHeight = () => {
  //   textarea.current.style.height = "auto";
  //   textarea.current.style.height = textarea.current.scrollHeight + "px";
  // };

  //실패

  // Input이 생기면 게시 버튼 생기기 없으면 다시 사라지기

  const [inputValue, setInputValue] = useState("");

  const saveInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const isCommentInput = inputValue;

  // 댓글 추가 기능

  // const addComment = (event) => {
  //   // list 값을 배열에 저장한다.
  //   // 그 배열의 요소만큼 map함수로 돌려 li 요소를 만든다.
  // }

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
              {/* <div className="text_s text_gray">댓글 달기...</div> */}
              <form>
                <div className="comment_area">
                  {/* {addComment ? <div className='comment_li'></div> : null} */}
                  <textarea
                    id="textarea"
                    // onClick={handleResizeHeight}
                    value={inputValue}
                    onChange={saveInputValue}
                    rows={1}
                    className="comment_input text_s text_gray"
                    placeholder="댓글 달기..."
                  ></textarea>{" "}
                  {isCommentInput ? (
                    <div onClick="addComment" className="inputButton text_bold">
                      게시
                    </div>
                  ) : null}
                  <div className="heart_icon icon_ss"></div>
                </div>
              </form>
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
              <div className="comment">
                <a className="text_s text_gray" href="/">
                  댓글 4개 모두 보기
                </a>
              </div>
              <div className="text_s text_gray">댓글 달기...</div>
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
          <div id="user_content_wrap">
            {/* 아래 유저들 */}
            <div className="user_el">
              <div className="left">
                <div className="profile_img"></div>
                <div className="margin_left column">
                  <div className="id_wrap">
                    <span className="user_id text_bold">wecode_zzang</span>
                    <div className="right icon_s badge_icon"></div>
                  </div>

                  <span className="text_ss text_gray">인기</span>
                </div>
              </div>
              <span className="right text_blue text_ss text_bold">팔로우</span>
            </div>

            <div className="user_el">
              <div className="left">
                <div className="profile_img"></div>
                <div className="margin_left column">
                  <div className="id_wrap">
                    <span className="user_id text_bold">wecode_zzang</span>
                    <div className="right icon_s badge_icon"></div>
                  </div>

                  <span className="text_ss text_gray">인기</span>
                </div>
              </div>
              <span className="right text_blue text_ss text_bold">팔로우</span>
            </div>
            <div className="user_el">
              <div className="left">
                <div className="profile_img"></div>
                <div className="margin_left column">
                  <div className="id_wrap">
                    <span className="user_id text_bold">wecode_zzang</span>
                    <div className="right icon_s badge_icon"></div>
                  </div>

                  <span className="text_ss text_gray">인기</span>
                </div>
              </div>
              <span className="right text_blue text_ss text_bold">팔로우</span>
            </div>
            <div className="user_el">
              <div className="left">
                <div className="profile_img"></div>
                <div className="margin_left column">
                  <div className="id_wrap">
                    <span className="user_id text_bold">wecode_zzang</span>
                    <div className="right icon_s badge_icon"></div>
                  </div>

                  <span className="text_ss text_gray">인기</span>
                </div>
              </div>
              <span className="right text_blue text_ss text_bold">팔로우</span>
            </div>
            <div className="user_el">
              <div className="left">
                <div className="profile_img"></div>
                <div className="margin_left column">
                  <div className="id_wrap">
                    <span className="user_id text_bold">wecode_zzang</span>
                    <div className="right icon_s badge_icon"></div>
                  </div>

                  <span className="text_ss text_gray">인기</span>
                </div>
              </div>
              <span className="right text_blue text_ss text_bold">팔로우</span>
            </div>
          </div>
          <div className="info">
            <ul>
              <span className="text_ss text_lightgray">소개</span>
              <span className="text_ss text_lightgray">·</span>
              <span className="text_ss text_lightgray">도움말</span>
              <span className="text_ss text_lightgray">·</span>
              <span className="text_ss text_lightgray">홍보 센터</span>
              <span className="text_ss text_lightgray">·</span>
              <span className="text_ss text_lightgray">API</span>
              <span className="text_ss text_lightgray">·</span>
              <span className="text_ss text_lightgray">채용 정보</span>
              <span className="text_ss text_lightgray">개인정보처리방침</span>
              <span className="text_ss text_lightgray">약관</span>
              <span className="text_ss text_lightgray">·</span>
              <br></br>
              <span className="text_ss text_lightgray">위치</span>
              <span className="text_ss text_lightgray">·</span>
              <span className="text_ss text_lightgray">언어</span>
              <span className="text_ss text_lightgray">·</span>
              <span className="text_ss text_lightgray">Meta Verified</span>
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
