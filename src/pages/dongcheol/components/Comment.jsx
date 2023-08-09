import React from "react";

export default function Comment({ userId, content }) {
  return (
    <div className="fbComments">
      <p>
        <span>{userId}</span>
        {content}
      </p>
    </div>
  );
}
