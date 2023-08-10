import React, { useEffect, useState } from "react";
import Feed from "./Feed";

export default function Feeds() {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    fetch("/data/feedData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setFeedData(data));
  }, []);

  return (
    <div className="feeds">
      {feedData.map((feed, i) => (
        <Feed key={i} feed={feed} />
      ))}
    </div>
  );
}
