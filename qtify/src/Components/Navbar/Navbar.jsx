import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navWrapper}>
      <a href="/">
        <Logo />
      </a>
      <Search placeholder="search a Album of Your Choice"/>
      <Button />
    </nav>
  );
};

export default Navbar;

{
  /* <div className={styles.navBox}>
      <img style={{ cursor: "pointer" }} src={Image} alt="QLogo" />

      <div style={{ display: "flex", width: "36%" }}>
        <input
          style={{
            padding: "0.8rem",
            width: "100%",
            borderRadius: "0.5rem 0rem 0rem 0.5rem",
          }}
          placeholder="Search a Album of Your Choice"
        />
        <div style={{ position: "relative", cursor: "pointer" }}>
          <div style={{ position: "absolute", top: "0.8rem", left: "0.8rem" }}>
            <img src={SearchIcon} alt="" />
          </div>
          <button
            style={{ width: "1rem", height: "1.2rem", padding: "1.4rem" }}
          ></button>
        </div>
      </div>
      <button
        style={{
          padding: "1rem",
          borderRadius: "1rem",
          width: "10%",
          fontWeight: "550",
          color: "var(--color-primary)",
          background: "var(--color-black)",
          cursor: "pointer",
          fontSize: "14px",
        }}
        children={"Give Feedback"}
      ></button>
    </div> */
}
