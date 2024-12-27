import React from "react";
import "./Sidebar.css";

const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?" ":'small-sidebar'}`}>
      <div className="shortcut-links">
        <div className={`side-link ${category===0?'active':""}`} onClick={()=>setCategory(0)}>
          <img src="/assets/home.png" alt="" />
          <p>Home</p>
        </div>
        <div className={`side-link ${category===20?'active':""}`} onClick={()=>setCategory(20)}>
          <img src="/assets/game_icon.png" alt="" />
          <p>Gaming</p>
        </div>
        <div className={`side-link ${category===2?'active':""}`} onClick={()=>setCategory(2)}>
          <img src="/assets/automobiles.png" alt="" />
          <p>Automobile</p>
        </div>
        <div className={`side-link ${category===17?'active':""}`} onClick={()=>setCategory(17)}>
          <img src="/assets/sports.png" alt="" />
          <p>Sports</p>
        </div>
        <div className={`side-link ${category===24?'active':""}`} onClick={()=>setCategory(24)}>
          <img src="/assets/entertainment.png" alt="" />
          <p>Entertainment</p>
        </div>
        <div className={`side-link ${category===28?'active':""}`} onClick={()=>setCategory(28)}>
          <img src="/assets/tech.png" alt="" />
          <p>Tech</p>
        </div>
        <div className={`side-link ${category===10?'active':""}`} onClick={()=>setCategory(10)}>
          <img src="/assets/music.png" alt="" />
          <p>Music</p>
        </div>
        <div className={`side-link ${category===22?'active':""}`} onClick={()=>setCategory(22)}>
          <img src="/assets/blogs.png" alt="" />
          <p>Blogs</p>
        </div>
        <div className={`side-link ${category===25?'active':""}`} onClick={()=>setCategory(25)}>
          <img src="/assets/news.png" alt="" />
          <p>News</p>
        </div>
        <hr />
        <div/>
      </div>
      <div className="subscribed-list">
          <h3>Subscribed</h3>
          <div className="side-link">
            <img src="/assets/cameron.png" alt="" />
            <p>Kaka</p>
          </div>
          <div className="side-link">
            <img src="/assets/simon.png" alt="" />
            <p>Nana</p>
          </div>
          <div className="side-link">
            <img src="/assets/tom.png" alt="" />
            <p>Lala</p>
          </div>
          <div className="side-link">
            <img src="/assets/megan.png" alt="" />
            <p>Haha</p>
          </div>
        </div>
    </div>
  );
};

export default Sidebar;
