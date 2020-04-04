import React from "react";
import FriendListItem from "./FriendListItem/FriendListItem";
import classes from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={classes["friend-list"]}>
      {friends.map(el => (
        <FriendListItem
          avatar={el.avatar}
          name={el.name}
          key={el.id}
          isOnline={el.isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;