/** @format */

import { Create, Image, EventNote, CalendarViewDay } from "@mui/icons-material";
import "./Feed.css";
// import ImageIcon from "@mui/icons-material/Image";
import InputOption from "./InputOption";
import Post from "./Post";

import { useEffect, useState } from "react";
import { db } from "./Firebase";
import firebase from "firebase/compat/app";

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "Rashid",
      description: "This is a test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput(""); // Clear input field after posting
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
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
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
