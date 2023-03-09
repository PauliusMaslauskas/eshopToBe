import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
            Blue&Black Shop
          </Typography>

          <Link to="/register" style={{ textDecoration: 'none' }}>
            <Button variant="contained">Register</Button>
          </Link>

          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button variant="contained">Login</Button>
          </Link>

          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="contained">Home</Button>
          </Link>

          <Link to="/itemform" style={{ textDecoration: 'none' }}>
            <Button variant="contained">List Item</Button>
          </Link>

        </Toolbar>
      </AppBar>
    </Box>
  );
}
