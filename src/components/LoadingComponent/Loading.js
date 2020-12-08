import React from "react";
import styles from "./loading.module.css";
import ReactLoading from "react-loading";
const Loading = () => {
  return (
    <div className={styles.loading}>
      <ReactLoading type="bars" color="#000" />
    </div>
  );
};

export default Loading;
