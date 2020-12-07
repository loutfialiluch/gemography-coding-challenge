import React from "react";
import styles from "./repository_details.module.css";

const RepositoryDetails = () => {
  return (
    <div className={styles.repository}>
      <div className={styles.avatar}>
        <img
          src="https://avatars2.githubusercontent.com/u/37313564?v=4"
          alt="avatar"
        />
      </div>
      <div className={styles.info}>
        <h3>TenserFlow</h3>
        <p className={styles.description}>
          An Open Source Machine Learning Framework for Everyone
          https://tenserflow.org
        </p>
        <div className={styles.info_bottom}>
          <span className={styles.numbers}>Stars : 118k</span>
          <span className={styles.numbers}>Issues : 1.6k</span>
          <p>Submitted 30 days ago by tenserflow</p>
        </div>
      </div>
    </div>
  );
};

export default RepositoryDetails;
