import React from 'react'
import './feed.css'
import {Link} from 'react-router-dom'
import { API_KEY } from '../../data'

const Feed = ({category}) => {
    const fetch_data=async (params) => {
        const videoList_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
    }
  return (
    <div className='feed'>
        <Link to={`video/20/13`} className="card">
            <img src="/assets/thumbnail1.png" alt="" />
            <h2>The best is here</h2>
            <h3>BixiOp</h3>
            <p>15k views &bull; 2 days ago</p>
        </Link>
        <div className="card">
            <img src="/assets/thumbnail2.png" alt="" />
            <h2>The best is here</h2>
            <h3>BixiOp</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src="/assets/thumbnail3.png" alt="" />
            <h2>The best is here</h2>
            <h3>BixiOp</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src="/assets/thumbnail4.png" alt="" />
            <h2>The best is here</h2>
            <h3>BixiOp</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src="/assets/thumbnail5.png" alt="" />
            <h2>The best is here</h2>
            <h3>BixiOp</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src="/assets/thumbnail6.png" alt="" />
            <h2>The best is here</h2>
            <h3>BixiOp</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src="/assets/thumbnail7.png" alt="" />
            <h2>The best is here</h2>
            <h3>BixiOp</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src="/assets/thumbnail8.png" alt="" />
            <h2>The best is here</h2>
            <h3>BixiOp</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src="/assets/thumbnail1.png" alt="" />
            <h2>The best is here</h2>
            <h3>BixiOp</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src="/assets/thumbnail2.png" alt="" />
            <h2>The best is here</h2>
            <h3>BixiOp</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src="/assets/thumbnail3.png" alt="" />
            <h2>The best is here</h2>
            <h3>BixiOp</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src="/assets/thumbnail4.png" alt="" />
            <h2>The best is here</h2>
            <h3>BixiOp</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src="/assets/thumbnail5.png" alt="" />
            <h2>The best is here</h2>
            <h3>BixiOp</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src="/assets/thumbnail6.png" alt="" />
            <h2>The best is here</h2>
            <h3>BixiOp</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src="/assets/thumbnail7.png" alt="" />
            <h2>The best is here</h2>
            <h3>BixiOp</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
        <div className="card">
            <img src="/assets/thumbnail8.png" alt="" />
            <h2>The best is here</h2>
            <h3>BixiOp</h3>
            <p>15k views &bull; 2 days ago</p>
        </div>
    </div>
  )
}

export default Feed