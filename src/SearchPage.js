import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0x00ffffff-no-rj"
        channel="Clever Programmer"
        verified
        subs="659K"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
      ></ChannelRow>
      <hr />
      <VideoRow
        views="1.3K"
        subs="892k"
        description="In this FREE LIVE training, David will teach you what are the smartest purchases and free resources you can have as a developer."
        timestamp="1 days ago"
        channel="Clever Programmer"
        title="
        🔴 Let's Build a YouTube Clone with REACT JS for Beginners
      "
        image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ"
      ></VideoRow>
      <VideoRow
        views="1.3K"
        subs="892k"
        description="In this FREE LIVE training, David will teach you what are the smartest purchases and free resources you can have as a developer."
        timestamp="1 days ago"
        channel="Clever Programmer"
        title="
        🔴 Let's Build a YouTube Clone with REACT JS for Beginners
      "
        image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ"
      ></VideoRow>
      <VideoRow
        views="1.3K"
        subs="892k"
        description="In this FREE LIVE training, David will teach you what are the smartest purchases and free resources you can have as a developer."
        timestamp="1 days ago"
        channel="Clever Programmer"
        title="
        🔴 Let's Build a YouTube Clone with REACT JS for Beginners
      "
        image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ"
      ></VideoRow>
      <VideoRow
        views="1.3K"
        subs="892k"
        description="In this FREE LIVE training, David will teach you what are the smartest purchases and free resources you can have as a developer."
        timestamp="1 days ago"
        channel="Clever Programmer"
        title="
        🔴 Let's Build a YouTube Clone with REACT JS for Beginners
      "
        image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ"
      ></VideoRow>
      <VideoRow
        views="1.3K"
        subs="892k"
        description="In this FREE LIVE training, David will teach you what are the smartest purchases and free resources you can have as a developer."
        timestamp="1 days ago"
        channel="Clever Programmer"
        title="
        🔴 Let's Build a YouTube Clone with REACT JS for Beginners
      "
        image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ"
      ></VideoRow>
      <VideoRow
        views="1.3K"
        subs="892k"
        description="In this FREE LIVE training, David will teach you what are the smartest purchases and free resources you can have as a developer."
        timestamp="1 days ago"
        channel="Clever Programmer"
        title="
        🔴 Let's Build a YouTube Clone with REACT JS for Beginners
      "
        image="https://i.ytimg.com/vi/NT299zIk2JY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBV8F8lciYfqvqqejRzPIFjS6PpUQ"
      ></VideoRow>
    </div>
  );
}

export default SearchPage;
