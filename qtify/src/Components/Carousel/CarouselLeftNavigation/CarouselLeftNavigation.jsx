import React,{useEffect,useState} from "react";
import styles from "./CarouselLeftNavigation.module.css";
import { ReactComponent as LeftNavigation } from "../../assets/Group 3741.svg";
import { useSwiper } from "swiper/react";

function CarouselLeftNavigation(){
const swiper=useSwiper();
const [isBeginning,setIsBeginning]=useState(swiper.isBeginning);

useEffect(()=>{
swiper.on("slideChange",function(){
    setIsBeginning(swiper.isBeginning);
})
},[]);

return(
    <div className={styles.leftNavigation}>
        {!isBeginning && <LeftNavigation onClick={()=> swiper.slidePrev()}/>}
    </div>
)

}

export default CarouselLeftNavigation;