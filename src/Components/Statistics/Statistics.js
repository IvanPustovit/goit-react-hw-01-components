import React from "react";
import PropTypes from "prop-types";
import classes from "./Statistics.module.css";

const Statistics = ({ title, stats }) => {
  return (
    <section className={classes.statistics}>
      <h2 className={classes.title}>{title}</h2>
      <ul className={classes["stat-list"]}>
        {stats.map(el => (
          <li className={classes.item} key={el.id}>
            <span className="label">{el.label}</span>
            <span className={classes.percentage}>{el.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: "Upload stats",
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
export default Statistics;
