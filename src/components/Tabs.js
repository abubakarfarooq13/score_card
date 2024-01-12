import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box sx={{ width: '100%', bgcolor: '#059e07' } }>
      <Tabs value={value} onChange={handleChange}  centered 
      TabIndicatorProps={{
        style: {
          backgroundColor: "#fff",

        }
      }} textColor="inherit"
      sx={{
            "& button" :{color:"#fff",
            fontSize:"0.9rem",
            fontWeight:"600"
        },
        "& svg":{
            color:"#fff",
        }
          }}
    >
        <Tab label="YESTERDAY" />
        <Tab label="TODAY" />
        <Tab label="TOMORROW" />
        <Tab icon={<CalendarMonthIcon/>}/>
      </Tabs>
      </Box>
      <Box sx={{ width: '100%', bgcolor: '#fff', } }>
      <Tabs  value={value} style={{
            borderBottom:"0.5px solid lightgray"}} onChange={handleChange}  centered 
      TabIndicatorProps={{
        style: {
          backgroundColor: "#059e07",
          zIndex:"2"
        }
      }}
       textColor="false"
      sx={{
            "& button" :{color:"#343638",textTransform:"none",
            fontSize:"1.1rem",
            fontWeight:"400",
        },
          }}
    >
        <Tab sx={{}}label="All" />
        <Tab sx={{}}label="Live" />
        <Tab sx={{}}label="Favorites" />
        
      </Tabs>
    </Box>
    </>
  );
}