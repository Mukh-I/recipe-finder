import React from "react";

const styles = {
  footer: {
    flexShrink: 0,
    padding: 20,
    backgroundColor: "#f50057",
    textAlign: "center",
    color: "white",
    marginTop: "2rem",
  },
};

const Footer = () => {
  return (
    <div style={styles.footer}>
      <p> &copy;Recipe finder | All rights reserved</p>
    </div>
  );
};

export default Footer;
