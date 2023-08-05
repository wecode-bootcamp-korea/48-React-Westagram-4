import moment from "moment/moment";
import React, { useEffect, useState } from "react";

export default function UserCard({ lastSeenTimestamp, userImg, userId }) {
  const [timeElapsed, setTimeElapsed] = useState("");

  useEffect(() => {
    const updateElapsed = () => {
      const now = moment();
      const lastSeen = moment(lastSeenTimestamp);
      const diffInMinutes = now.diff(lastSeen, "minutes");

      if (diffInMinutes < 1) {
        setTimeElapsed("방금 전");
      } else if (diffInMinutes < 60) {
        setTimeElapsed(`${diffInMinutes}분 전`);
      } else if (diffInMinutes < 1440) {
        const hoursAgo = Math.floor(diffInMinutes / 60);
        setTimeElapsed(`${hoursAgo}시간 전`);
      } else {
        const daysAgo = Math.floor(diffInMinutes / 1440);
        setTimeElapsed(`${daysAgo}일 전`);
      }
    };

    updateElapsed(); // 최초 렌더링 시간 갱신
    const interval = setInterval(updateElapsed, 60000); // 1분마다 갱신

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 인터벌 해제
  }, [lastSeenTimestamp]);

  return (
    <div className="userCard">
      <div className="userImg">
        <img src={userImg} alt="#" style={{ width: "40px" }} />
      </div>
      <div className="userInfo">
        <h4>{userId}</h4>
        <p>{timeElapsed}</p>
      </div>
    </div>
  );
}
