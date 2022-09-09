import { Fragment } from "react";
import styles from "./Header.module.css";
import heroImage from "../../assets/meals.jpg";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCardButton onClick={props.onShowCart}/>
      </header>
      <div className={styles["main-image"]}>
        <img src={heroImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
