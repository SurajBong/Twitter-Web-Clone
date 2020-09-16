import { Search } from "@material-ui/icons";
import React from "react";

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"Add your tweet id"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="add your user name"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"Add your url"}
          options={{ text: "#reactjs is awesome", via: "add your username" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
