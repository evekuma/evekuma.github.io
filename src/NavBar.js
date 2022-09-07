import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme } from '@mui/material/styles';
import { green, purple, grey } from '@mui/material/colors';

export default function BuuttonAppBar() {
  
  const theme = createTheme({
  palette: {
    primary: {
      main: grey[50],
    },
    secondary: {
      main: green[500],
    },
  },
  });
  const mystyle = {
    height: "80px",
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" theme={theme} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src="https://drive.google.com/uc?export=view&id=1dHiES1DO9M5oFsI8PazSRyFsnLJZ24IL" style={mystyle} />
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}