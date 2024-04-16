/** @format */

import { Avatar } from "@mui/material";
import "./Post.css";
import InputOption from "./InputOption";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@mui/icons-material";
function Post({ name, description, message, PhotoUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />
        <div className="Post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">{message}</div>

      <div className="post__buttons">
        <InputOption title="Like" Icon={ThumbUpAltOutlined} color="gray" />
        <InputOption title="Comment" Icon={ChatOutlined} color="gray" />
        <InputOption title="Repost" Icon={ShareOutlined} color="gray" />
        <InputOption title="Like" Icon={SendOutlined} color="gray" />
      </div>
    </div>
  );
}

export default Post;
