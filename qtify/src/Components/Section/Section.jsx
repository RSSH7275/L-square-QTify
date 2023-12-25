import React, { useState } from "react";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import styles from "./Section.module.css";

export default function Section({ title, data, type }) {
  const [carrouselToggle, setCarrouselToggel] = useState(false);

  const handleCarouselToggel = () => {
    setCarrouselToggel((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.mainHeader}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleCarouselToggel}>
          {!carrouselToggle ? "Collapse" : "Show All"}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          {!carrouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((ele) => (
                <Card data={ele} type={type} />
              ))}
            </div>
          ) : null}
        </div>
      )}
    </>
  );
}
