import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../SongTab/SongTab";
import styles from "./Section.module.css";

export default function Section({ title, data, type }) {
  const [carrouselToggle, setCarrouselToggel] = useState(true);
  const [tabChange, setTabChange] = useState([]);

  useEffect(() => {
    if (title == "Songs") {
      setTabChange(data);
    }
  }, [data, title]);
  // console.log('what sis data??',tabChange);
  const handleCarouselToggel = () => {
    setCarrouselToggel((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.mainHeader}>
        {title == "Songs" ? (
          <>
            <h3>{title}</h3>
          </>
        ) : (
          <>
            <h3>{title}</h3>
            <h4 className={styles.toggleText} onClick={handleCarouselToggel}>
              {!carrouselToggle ? "Collapse" : "Show All"}
            </h4>
          </>
        )}
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
          ) : (
            <>
              {title == "Songs" ? (
                <>
                  <BasicTabs songs={data} setTab={setTabChange} />

                  {tabChange.length !== 0 ? (
                    <Carousel
                      data={tabChange}
                      renderComponent={(data) => (
                        <Card data={data} type={type} />
                      )}
                    />
                  ) : (
                    <CircularProgress />
                  )}
                </>
              ) : (
                <Carousel
                  data={data}
                  renderComponent={(data) => <Card data={data} type={type} />}
                />
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}
