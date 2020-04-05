import React from "react";
import PropTypes from "prop-types";
import classes from "./profile.module.css";

const Profile = ({ user }) => {
  return (
    <div className={classes.profile}>
      <div className={classes.description}>
        <img src={user.avatar} alt="user avatar" className={classes.avatar} />
        <p className={classes.name}>{user.name}</p>
        <p className={classes.tag}>{user.tag}</p>
        <p className={classes.location}>{user.location}</p>
      </div>
      <ul className={classes.stats}>
        <li>
          <span className={classes.label}>Followers</span>
          <span className={classes.quantity}>{user.stats.followers}</span>
        </li>
        <li>
          <span className={classes.label}>Views</span>
          <span className={classes.quantity}>{user.stats.views}</span>
        </li>
        <li>
          <span className={classes.label}>Likes</span>
          <span className={classes.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number),
  }),
};

export default Profile;
