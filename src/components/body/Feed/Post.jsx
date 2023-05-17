import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MessageIcon from "@mui/icons-material/Message";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import InputOptions from "./InputOptions";

const Wrapper = styled.section`
  background-color: #fff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;

  .post__header {
    display: flex;
    margin-bottom: 10px;
    align-items: center;
  }

  .post__info {
    margin-left: 10px;
  }

  .post__info > p {
    font-size: 12px;
    color: gray;
  }

  .post__info > h2 {
    font-size: 15px;
  }

  .post__body {
    overflow-wrap: anywhere;
  }

  .post__buttons {
    margin-top: 10px;
    border-top: 0.1px solid gray;
    padding: 10px;
    color: gray;
    display: flex;
    justify-content: flex-start;
  }
`;

const Post = ({ name, description, message, photoUrl }) => {
  return (
    <Wrapper>
      <div className="post__header">
        <Avatar />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOptions Icon={ThumbUpIcon} title="like" />
        <InputOptions Icon={MessageIcon} title="comment" />
        <InputOptions Icon={ShareIcon} title="share" />
        <InputOptions Icon={SendIcon} title="send" />
      </div>
    </Wrapper>
  );
};

export default Post;
