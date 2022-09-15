import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react'

const HeaderMenu: React.FC = () => {
  return (
    <AppBar position="static" component="nav">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} >
          White Board
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderMenu;