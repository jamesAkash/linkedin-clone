import { useEffect, useState } from "react";
import "./Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from "./InputOptions";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import EventNoteIcon from "@mui/icons-material/EventNote";
import NotesIcon from "@mui/icons-material/Notes";
import Post from "./Post";
import firebase from "firebase/compat/app";
import { db } from "../../../firebase";
import { useSelector } from "react-redux";
import FlipMove from "react-flip-move";

const Feed = () => {
  const user = useSelector((store) => store.user.user);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

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
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              type="text"
              onChange={(e) => setInput(e.target.value)}
              placeholder="Start Typing..."
            />
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
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => {
          return (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
            />
          );
        })}
      </FlipMove>
    </div>
  );
};

export default Feed;
