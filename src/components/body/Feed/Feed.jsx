import React from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from "./InputOptions";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import EventNoteIcon from "@mui/icons-material/EventNote";
import NotesIcon from "@mui/icons-material/Notes";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" placeholder="Start Typing..." />
            <button type="submit">Send</button>
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
    </div>
  );
};

export default Feed;
