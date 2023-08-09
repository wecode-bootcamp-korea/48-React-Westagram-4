import "../Main.scss";
import { useState } from "react";

const Comment = ({ commentValue, inputValue }) => {
  return (
    <>
      <ul className="comment_container">
        {commentValue.map((li, index) => (
          <li key={index}>
            <span className="commentUserName">{li.id}</span>
            {li.comment}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Comment;
