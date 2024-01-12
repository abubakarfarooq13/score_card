import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import AppBar from '@mui/material/AppBar';
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FullWidthTabs from './Tabs';
const Navbar = () => {


  return (
    <div>
       
       <AppBar sx={{bgcolor:"#059e07",height:"4rem",justifyContent:"center"}} position="static">
  <Toolbar variant="dense">
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2,}}>
      <MenuIcon style={{fontSize:"2rem" }} />
    </IconButton>
    <Typography variant="h5" color="inherit" component="div" sx={{fontWeight:"500"}}>
      Scores
    </Typography>
    <IconButton edge="end" color="inherit" sx={{ ml: "auto" }} >
      
      <SearchIcon style={{fontSize:"2rem" }}  />
    </IconButton>
  </Toolbar>
</AppBar>
<FullWidthTabs/>
    </div>
  )
}

export default Navbar
