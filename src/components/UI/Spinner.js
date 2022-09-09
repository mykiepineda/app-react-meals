import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import React from "react";

import classes from "./Spinner.module.css";

const Spinner = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.spinner}>
        <FontAwesomeIcon icon={faSpinner} spin={true} size="3x" />
      </div>
      <p className={classes.message}>{props.message}</p>
    </div>
  );
};

export default Spinner;
