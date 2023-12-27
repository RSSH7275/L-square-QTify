import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { useOutletContext } from "react-router-dom";
import { fetchFilterSongs } from "../api/api";
import Box from "@mui/material/Box";
import styles from "./SongTab.module.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({songs,setTab}) {
  const { data } = useOutletContext();
  const { genres } = data;

  const [value, setValue] = React.useState(0);
  // const [songType, setSongType] = React.useState(null);

  // console.log("what is tabs?",songs);

  const handleChange = (event, newValue) => {
    // console.log(event.target.outerText);
    setValue(newValue);
    
    const filterData=songs.filter((ele) => (ele.genre.label).toUpperCase() ==event.target.innerText);
    
    if(filterData.length!==0){
      setTab(filterData);
    }
    else{
      setTab(songs);
    }
    // console.log('hihiu',filterData);
  }; 

  return (
    <Box sx={{ width: "100%", marginBottom: "2rem" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="#FFFFFF"
          TabIndicatorProps={{style: {background:'#34C94B'}}}
        >
          <Tab label="All" {...a11yProps(0)} />
          {genres.map((ele, indx) => {
            return (
              <Tab
                key={indx}
                label={`${ele.label}`}
                {...a11yProps(`${indx + 1}`)}
              />
            );
          })}
        </Tabs>
      </Box>
    </Box>
  );
}
