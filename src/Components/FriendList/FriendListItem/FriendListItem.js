import React from "react";
import classes from "../FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={classes.item}>
      {isOnline ? (
        <span className={classes.online}></span>
      ) : (
        <span className={classes.offline}></span>
      )}

      <img className={classes.avatar} src={avatar} alt={name} width="55" />
      <p className={classes.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
