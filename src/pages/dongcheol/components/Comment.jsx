import React from "react";

export default function Comment({ userId, content, key }) {
  return (
    <div className="fbComments" key={key}>
      <p>
        <span>{userId}</span>
        {content}
      </p>
    </div>
  );
}
