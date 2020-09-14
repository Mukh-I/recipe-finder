import React from "react";

import "./loading-spinner.styles.scss";

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner-container">
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default LoadingSpinner;
