import React from "react";
import {useOutletContext} from 'react-router-dom';
import HeroSection from "../Hero/Hero";
import Section from "../Section/Section";
import styles from "./HomePage.module.css";

function HomePage(){

    const {data} =useOutletContext();

    const {topAlbums,newAlbums,songs}=data;
return(
<>
<HeroSection />
<div className={styles.wrapper}>
<Section title="Top Albums" data={topAlbums} type="album"/>
<Section title="New Albums" data={newAlbums} type="newSongs"/>
{/* <Section title="Songs" data={newAlbums} type="songs"/> */}
</div>
</>
)

}

export default HomePage;