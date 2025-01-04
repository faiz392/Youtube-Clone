import React from "react";
import "./recommend.css";
import { API_KEY } from "../../data";
import { useState, useEffect } from "react";
import { value_converter } from "../../data";
import { Link } from "react-router-dom";

const Recommend = ({ categoryId }) => {
  const [apidata, setapidata] = useState([]);
  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideo_url)
      .then((response) => response.json())
      .then((data) => setapidata(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recommended">
      {apidata.map((item, index) => {
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`}key={index} className="side-video-list">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              <h4>{item.snippet.title}</h4>
              <p>{item.snippet.channelTitle}</p>
              <p>{value_converter(item.statistics.viewCount)} views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommend;
