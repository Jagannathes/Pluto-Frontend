import React from 'react'
import { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper'
import  BottomNavigation  from '@mui/material/BottomNavigation';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useMediaQuery } from '@mui/material';

function BottomNavBar() {
    const [value, setValue] = useState(0);
    const isMobileView = useMediaQuery('(max-width:600px)');

    if(!isMobileView)
           return null;

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
        </BottomNavigation>
      </Paper>
  )
}

export default BottomNavBar