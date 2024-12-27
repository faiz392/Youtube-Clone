import React from "react";
import "./PlayVideo.css";
import { API_KEY } from "../../data";
import { useState, useEffect } from "react";
import { value_converter } from "../../data";
import moment from "moment";

const Playvideo = ({ videoId }) => {
  const [apiData, setapiData] = useState(null);
  const fetchvideoData = async () => {
    //fetching data
    const videoDetail_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetail_url)
      .then((response) => response.json())
      .then((data) => setapiData(data.items[0]));
  };
  useEffect(() => {
    fetchvideoData();
  }, []);

  return (
    <div className="play-video">
      {/* <video src="/assets/video.mp4" controls autoPlay muted /> */}
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="They Called Me a *15KD H@CKER 🗿"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title here"}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : "16K"}
          &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span>
            <img src="/assets/like.png" />
            {apiData ? value_converter(apiData.statistics.likeCount) : "16K"}
          </span>
          <span>
            <img src="/assets/dislike.png" />
          </span>
          <span>
            <img src="/assets/share.png" />
            Share
          </span>
          <span>
            <img src="/assets/save.png" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src="/assets/tom.png" alt="" />
        <div>
          <p>{apiData?apiData.snippet.channelTitle:""}</p>
          <span>1M subscriber</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>{apiData?apiData.snippet.description.slice(0,250):"Description Here"}</p>
        <hr />
        <h4>{apiData?value_converter(apiData.statistics.commentCount):"100"}</h4>
        <div className="comment">
          <img src="/assets/user_profile.jpg" />
          <div>
            <h3>
              Fawad <span>1 day ago</span>
            </h3>
            <p>This is a comment</p>
            <div className="comment-action">
              <img src="/assets/like.png" alt="" />
              <span>244</span>
              <img src="/assets/dislike.png" alt="" />
            </div>
          </div>
        </div>
        <div className="comment">
          <img src="/assets/user_profile.jpg" />
          <div>
            <h3>
              Fawad <span>1 day ago</span>
            </h3>
            <p>This is a comment</p>
            <div className="comment-action">
              <img src="/assets/like.png" alt="" />
              <span>244</span>
              <img src="/assets/dislike.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playvideo;
