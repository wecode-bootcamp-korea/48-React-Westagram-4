import React from "react";

export default function Comment({ userId, content }) {
  return (
    <div className="feedBottomComments">
      <p>
        <span>{userId}</span>
        {content}
      </p>
    </div>
  );
}
