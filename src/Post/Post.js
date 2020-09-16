import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";

import {
  VerifiedUser,
  ChatBubble,
  Repeat,
  FavoriteBorder,
  Publish,
} from "@material-ui/icons";

import "./Post.css";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div ref={ref} className="post">
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}
                <span>
                  {verified && <VerifiedUser className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubble fontSize="small" />
            <Repeat fontSize="small" />
            <FavoriteBorder fontSize="small" />
            <Publish fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
