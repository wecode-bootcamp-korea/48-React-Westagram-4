import "./Main.scss";
import { useState } from "react";
import User from "./components/User";
import { FOOTER_INFO_LIST } from "./FooterData";
import { NAV_LIST } from "./NavData";
import Feed from "./components/Feed";

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
        <a className="logoWrap" href="/">
          <h1 className="logo">westagram</h1>
        </a>

        <div className="interface ">
          {NAV_LIST.map((i, index) => (
            <div className="menuElement">
              <a key={i.id} href={i.link}>
                <div className={`icon ${i.iconName}`}></div>
                <span className="iconText"> {i.text}</span>
              </a>
            </div>
          ))}
        </div>
        <div className="hambugerBar">
          <div className="icon moreIcon"></div>
          <span className="iconText">더 보기</span>
        </div>
      </nav>

      <div className="mainWrap">
        <div className="blank"></div>
        <div className="feeds">
          <Feed
            commentList={commentList}
            inputValue={inputValue}
            saveInputValue={saveInputValue}
            isCommentInput={isCommentInput}
            makeComment={makeComment}
          />
          <Feed
            commentList={commentList}
            inputValue={inputValue}
            saveInputValue={saveInputValue}
            isCommentInput={isCommentInput}
            makeComment={makeComment}
          />
        </div>

        <div className="mainRight">
          {/* 상단 나의 계정 */}
          <div className="accountWrap">
            <div className="left">
              <div className="profileImgBig "></div>
              <div className="marginLeft column">
                <span className="userId textBold">wecode_zzang</span>
                <span className="textS textGray">codekim</span>
              </div>
            </div>
            <span className="right textBlue textSs textBold"> 전환</span>
          </div>

          <div className="recommend flexSpaceBetween">
            <span className="textS textSemibold textGray ">
              회원님을 위한 추천
            </span>
            <span className="textSs textSemibold">모두 보기</span>
          </div>
          {/* 추천계정목록 */}
          <div id="userContentWrap">
            <User />
            <User />
            <User />
            <User />
            <User />
          </div>
          <div className="info">
            <ul>
              {FOOTER_INFO_LIST.map((i, index) => (
                <a key={i.id} className="textSs textLightgray" href={i.link}>
                  {i.text}
                </a>
              ))}
            </ul>
            <span className="textSs textLightgray">
              © 2023 Instagram from Meta
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
