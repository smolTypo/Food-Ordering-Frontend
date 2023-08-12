import React from "react";
import classes from "./Header.module.css";
import headerImage from "../../assets/header.jpeg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h2>The Aristocat Fare</h2>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes.main}>
        <img src={headerImage} alt="flying cat" />
      </div>
    </React.Fragment>
  );
};

export default Header;
