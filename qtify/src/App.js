import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/Hero/Hero";
import {StyledEngineProvider} from '@mui/material';
import {fetchTopAlbum,fetchNewSongs,fetchSongs,fetchFilterSongs} from "./Components/api/api";
import {Outlet} from 'react-router-dom';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  
  const [data,setData]=useState({});

  const dataGenerate=(key,source)=>{
    source().then((data)=>{
      setData((prevData)=>{
        return {...prevData,[key]:data};
      })
    })
  }

  useEffect(()=>{
    dataGenerate("topAlbums",fetchTopAlbum);
    dataGenerate("newAlbums",fetchNewSongs);
    dataGenerate("songs",fetchSongs);
    dataGenerate("genres",fetchFilterSongs);

  },[]);
  
  const {topAlbums=[],newAlbums=[],songs=[],genres=[]}=data;

  return (
    <div className="App">
    <StyledEngineProvider injectFirst>
      <Navbar/>    
      <Outlet context={{data:{topAlbums,newAlbums,songs,genres}}}/>  
    </StyledEngineProvider>
    </div>
    
  );
}

export default App;
