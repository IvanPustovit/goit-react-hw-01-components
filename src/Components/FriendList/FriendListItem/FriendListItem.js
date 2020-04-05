import React from "react";
import PropTypes from "prop-types";
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

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
