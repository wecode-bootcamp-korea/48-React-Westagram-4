import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../../../styles/reset.scss";
import "./Main.scss";

const Main = () => {
  return (
    <div className="main">
      <header>
        <div className="logo">
          <a href="#" className="symbol">
            <img src="images/heejin/logo.png" alt="" />
          </a>
          <a href="#" className="title">Westagram
          </a>
        </div>

        <div className="searchSpace">
          <form>
            <input type="search" placeholder="검색" />
          </form>
        </div>

        <div className="icon">
          <a href="#">
            <img src="images/heejin/location_icon.png" alt="찾기 아이콘" />
          </a>
          <a href="#">
            <img src="images/heejin/heart_icon.png" alt="하트 아이콘" />
          </a>
          <a href="#">
            <img src="images/heejin/user_icon.png" alt="유저 아이콘" />
          </a>
        </div>
      </header>

      <main>
          <article className="feed">
            <div className="feedTop">
              <div className="profile">
                <img src="images/heejin/wecode_logo.jpeg" art="" />
                <p className="bold">canon_mj</p>
              </div>

              <div className="moreBtn">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="feedImg">
              <img src="images/dessert_1.jpeg" art="" />
            </div>

            <div className="feedIcon">
              <div className="left">
                <a href="#">
                  <img src="images/heejin/heart_full_icon.png" alt="좋아요 아이콘" />
                </a>
                <a href="#">
                  <img src="images/heejin/message_icon.png" alt="메세지 아이콘" />
                </a>
                <a href="#">
                  <img src="images/heejin/export_icon.png" alt="공유하기 아이콘" />
                </a>
              </div>

              <div className="right">
                <a href="#">
                  <img src="images/heejin/save_icon.png" alt="저장하기 아이콘" />
                </a>
              </div>
            </div>

            <div className="feedContent">
              <div className="like">
                <img src="images/wecode_logo.jpeg" alt="" />
                <p>
                  <span className="bold">aineworld</span>님
                  <span className="bold">외 10명</span>
                  이 좋아합니다.
                </p>
              </div>
              <div className="des">
                <p>
                  <span className="bold">canon_mj</span>
                  위워크에서 진행한 베이킹 클래스..
                  <a href="#" className="gray">더 보기</a>
                </p>
              </div>
              <div className="comment">
                <p>
                  <span className="bold">neceosecius</span>
                  거봐 좋았잖아~~~~~~
                </p>
                <p className="gray">42분 전</p>
              </div>
              <div className="feedBottom">
                <p className="gray">댓글 달기...</p>
                <p>게시</p>
              </div>
            </div>

          </article>

        <div className="mainRight">
          <div className="myProfile">
            <p>wecode_bootcamp</p>
            <p className="gray">WeCode | 위코드</p>
          </div>

          <div className="story">
            <p>스토리</p>
            <a>모두 보기</a>
            <ul>
              <li>
                <p>_yum_s</p>
                <p>16분 전</p>
              </li>
              <li>
                <p>drink_eat_drink</p>
                <p>3시간 전</p>
              </li>
              <li>
                <p>hyukyc</p>
                <p>20시간 전</p>
              </li>
              <li>
                <p>jminkeek</p>
                <p>21시간 전</p>
              </li>
            </ul>
          </div>

          <div className="list">
            <p>회원님을 위한 추천</p>
            <a>모두 보기</a>
            <ul>
              <li>
                <p>joaaaaahye</p>
                <p></p>
                <a href="#">팔로우</a>
              </li>
              <li>
                <p>rampart81</p>
                <p></p>
                <a href="#">팔로우</a>
              </li>
              <li>
                <p>shawnjjoo</p>
                <p></p>
                <a href="#">팔로우</a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <footer>
        <p>
          Instagram 정보
        </p>
        <p></p>
      </footer>
    </div>
  );
};

export default Main;