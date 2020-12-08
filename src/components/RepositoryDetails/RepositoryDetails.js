import React from "react";
import styles from "./repository_details.module.css";
import moment from "moment";
import abbreviate from "number-abbreviate";

const RepositoryDetails = ({ repository }) => {
  const {
    name,
    description,
    owner: { avatar_url: avatar, login },
    stargazers_count: numberOfStars,
    open_issues: numberOfIssues,
    created_at,
  } = repository;

  return (
    <div className={styles.repository}>
      <div className={styles.avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={styles.info}>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.info_bottom}>
          <span className={styles.numbers}>
            Stars : {abbreviate(numberOfStars, 2)}
          </span>
          <span className={styles.numbers}>
            Issues : {abbreviate(numberOfIssues, 2)}
          </span>
          <p>
            Submitted {moment(created_at).fromNow()} by {login}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RepositoryDetails;
