import React, { useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from "./InputOptions";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import EventNoteIcon from "@mui/icons-material/EventNote";
import NotesIcon from "@mui/icons-material/Notes";
import Post from "./Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" placeholder="Start Typing..." />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={InsertPhotoIcon} color="orange" title="Photo" />
          <InputOptions
            Icon={VideoCameraBackIcon}
            color="purple"
            title="Video"
          />
          <InputOptions
            Icon={EventNoteIcon}
            color="dodgerblue"
            title="gallery"
          />
          <InputOptions Icon={NotesIcon} color="black" title="Write article" />
        </div>
      </div>
      {/* Posts */}
      {posts.map((post) => {
        return <Post />;
      })}
      <Post
        name="Akash James"
        description="This is a test"
        message="And baam this is our first Mock postsdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
      />
    </div>
  );
};

export default Feed;
