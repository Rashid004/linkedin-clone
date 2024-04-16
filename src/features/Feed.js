/** @format */

import { Create, Image, EventNote, CalendarViewDay } from "@mui/icons-material";
import "./Feed.css";
// import ImageIcon from "@mui/icons-material/Image";
import InputOption from "./InputOption";
import Post from "./Post";
import { useState } from "react";
function Feed() {
  const [posts, setPosts] = useState([]);

  function sendPost(e) {
    e.preventDefault();
  }
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input type="text" />
            <button onClick={sendPost} type="submit">
              send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} color="#378fe9" title="Media" />
          {/* <InputOption Icon={Subscriptions} color="#E7A33E" title="Video" /> */}
          <InputOption Icon={EventNote} color="#c37d16" title="Event" />
          <InputOption
            Icon={CalendarViewDay}
            color="#e06847"
            title="Write article"
          />
        </div>
      </div>
      {posts.map((post) => (
        <Post />
      ))}
      <Post
        name="Ansari Rashid"
        description="this is a test"
        message=" Wow this is worked nice yehh"
      />
    </div>
  );
}

export default Feed;
