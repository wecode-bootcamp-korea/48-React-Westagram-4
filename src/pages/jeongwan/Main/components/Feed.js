// import "./Main.scss";
// import { useState } from "react";
// import Child from "./Child";

// const Comment = () => {
//   return (
//     <>
//       <div className="article">
//             <div className="article_top">
//               <div className="left">
//                 <div className="profile_img "></div>
//                 <div className="margin_left">
//                   <span className="user_id text_bold">wecode_zzang</span>
//                   <span className="date"> · 1일</span>
//                 </div>
//               </div>

//               <div className="right icon_m more_icon"></div>
//             </div>

//             <div className="main_img">
//               <div className="img_src"></div>
//             </div>

//             <div className="article_text_wrap">
//               <div className="article_icon margin_bottom">
//                 <div className="left">
//                   <div className="icon margin_right heart_icon"></div>

//                   <div className="icon margin_right talk_icon"></div>

//                   <div className="icon margin_right airplane_icon"></div>
//                 </div>

//                 <div className="icon_ss bookmark_icon"></div>
//               </div>

//               <div className="text_s text_bold margin_bottom">좋아요 15개</div>
//               <div className="space_between">
//                 <div className="text_s">secrecy_shhhh 무더운 이 여름</div>
//                 <div className="heart_icon icon_ss"></div>
//               </div>
//               <div className="allComment">
//                 <a className="text_s text_gray" href="/">
//                   댓글 4개 모두 보기
//                 </a>
//               </div>
//               <Child commentValue={commentList} inputValue={inputValue} />

//               <div className="comment_area">
//                 <form className="comment_area">
//                   <input
//                     id="textarea"
//                     value={inputValue}
//                     onChange={saveInputValue}
//                     rows={1}
//                     className="comment_input text_s text_gray"
//                     placeholder="댓글 달기..."
//                   />
//                   {isCommentInput ? (
//                     <button
//                       type="button"
//                       onClick={makeComment}
//                       className="inputButton text_bold"
//                     >
//                       게시
//                     </button>
//                   ) : null}
//                 </form>

//                 <div className="heart_icon icon_ss"></div>
//               </div>
//             </div>
//           </div>
//     </>
//   );
// };

// export default Comment;
