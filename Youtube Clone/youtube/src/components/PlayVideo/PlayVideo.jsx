import React from "react";
import "./PlayVideo.css";

const Playvideo = () => {
  return (
    <div className="play-video">
      <video src="/assets/video.mp4" controls autoPlay muted />
      <h3>Just a video</h3>
      <hr />
      <div className="play-video-info">
        <p>1500 views &bull; 2 days ago</p>
        <div>
          <span>
            <img src="/assets/like.png" />
            100
          </span>
          <span>
            <img src="/assets/dislike.png" />2
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
        <div className="publisher">
          <img src="/assets/tom.png" alt="" />
          <div>
            <p>Chai aur code</p>
            <span>1M subscriber</span>
          </div>
          <button>Subscribe</button>
        </div>
        <div className="vid-description">
          <p>Channel that makes learning easy</p>
          <p>Subscribe to watch more and learn</p>
          <hr />
          <h4>130 comments</h4>
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
    </div>
  );
};

export default Playvideo;
