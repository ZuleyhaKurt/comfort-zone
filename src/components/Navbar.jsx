import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {  useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Badge, Modal } from '@mui/material';
import Favorite from './Favorite';
import FavoriteIcon from '@mui/icons-material/Favorite';




function Navbar() {

  const { cartCount } = useSelector((state) => state.cart);
  const [open, setOpen] = React.useState(false);
  
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

 

  return (
    <AppBar position="static">
      <Container maxWidth="xl" sx={{backgroundColor:'white'}}>
        <Toolbar disableGutters>
          
          <Typography
            onClick={()=>navigate("/")}
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
            COMFORT ZONE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
                <MenuItem >
                  <Typography textAlign="center" onClick={()=>navigate("/")}>
                   
                  Home
                  </Typography>
              </MenuItem>
              <MenuItem >
                  <Typography textAlign="center" onClick={()=>navigate("/about")}>
                   
                 About
                  </Typography>
              </MenuItem>
              <MenuItem >
                  <Typography textAlign="center" onClick={()=>navigate("/products")}>
                   
                  Product
                  </Typography>
                </MenuItem>
          
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
            
              color: 'black',
              textDecoration: 'none',
            }}
          >
           Comfort Zone
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } ,justifyContent:'center' }}>
          
              <Button
             
                onClick={() => navigate("/")}
                sx={{ my: 2, color: 'black', display: 'block' ,px:'1.5rem' }}
              >
                Home
            </Button>
            <Button
             
             onClick={() => navigate("/about")}
             sx={{ my: 2, color: 'black', display: 'block' ,px:'1.5rem' }}
           >
            About
            </Button>
            <Button
             
             onClick={() => navigate("/products")}
             sx={{ my: 2, color: 'black', display: 'block' ,px:'1.5rem' }}
           >
           Products
           </Button>
            
          </Box>

          <Box sx={{ flexGrow: 0 }}>
          <Button onClick={() => navigate("/favorite")}><FavoriteIcon sx={{color:"gray"}} /></Button>
                   
                  <Tooltip  >
                  <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="gray"
                onClick={() => navigate("/cart")}>
                Cart
              <Badge badgeContent={cartCount} color="warning">
                {/* burdaki badge contente state gelecek */}
                <AddShoppingCartIcon
                
              
                />
              </Badge>
            </IconButton>
            </Tooltip>
            
            <Tooltip >
              <IconButton onClick={() => navigate("/login")} sx={{ p: 1 }}>
                             
                              Login
                              <AccountCircleIcon/>
              </IconButton>
            </Tooltip>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;