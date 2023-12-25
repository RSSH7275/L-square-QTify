import React from "react";
import styles from "./Card.module.css";
import { Tooltip } from "@mui/material";
import { SentimentDissatisfied } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, title, follows, songs, slug } = data;
        
        return (
          <Tooltip title={`${songs?.length} songs`} placement="top" arrow>
           <Link to={`/album/${slug}`}>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt="song" loading="lazy" />
                <div className={styles.banner}>
                  <div className={styles.pill}>
                    <p>{follows} follows</p>
                  </div>
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
            </Link>
          </Tooltip>
        );
        // })
      }

      case "newSongs": {
        const { image, title, follows, songs, slug } = data;
        return (
          <Tooltip title={`${songs?.length} songs`} placement="top" arrow>
          <Link to={`/album/${slug}`}>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt="song" loading="lazy" />
                <div className={styles.banner}>
                  <div className={styles.pill}>
                    <p>{follows} follows</p>
                  </div>
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
            </Link>
          </Tooltip>
        );
      }

      case "songs": {
        const { image, likes, title, songs, slug } = data;
        // console.log("Datas",datas);
        // console.log("Songs",title);
        return (
          <Tooltip title={`${songs?.length} songs`} placement="top" arrow>
          <Link to={`/album/${slug}`}>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt="song" loading="lazy" />
                <div className={styles.banner}>
                  <div className={styles.pill}>
                    <p>{likes} Likes</p>
                  </div>
                </div>
              </div>
              <div className={styles.titleWrapper}>
                <p>{title}</p>
              </div>
            </div>
            </Link>
          </Tooltip>
        );
      }

      default:
        return (
          <>
            <SentimentDissatisfied />
          </>
        );
    }
  };

  return getCard(type);
};

export default Card;
