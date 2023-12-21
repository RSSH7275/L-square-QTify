import React from 'react';
import {ReactComponent as SearchIcon} from "../assets/SearchIcon.svg"; 
import styles from "./Search.module.css";

const Search = ({search}) => {

    function handleFormSubmit(e){
      e.preventDefault();
    }

  return (
    <form onSubmit={handleFormSubmit} className={styles.formBox}>
        <input className={styles.inpBox} type='text' required  placeholder={search}/>
       <button type='submit' style={{padding:'0.5rem',width:'4rem',borderRadius: "0rem 0.5rem 0.5rem 0rem",}}><SearchIcon/></button>
    </form>
  )
}

export default Search;
