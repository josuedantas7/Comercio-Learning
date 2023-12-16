import React, { useContext } from 'react';

import { CiShop } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { FiShoppingCart } from "react-icons/fi";
import { IoMdCloseCircle } from "react-icons/io";
import { MdClose } from "react-icons/md";

import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

const Header = () => {

  const { signed,logout } = useContext(AuthContext)
  const { cart, total, removeItem } = useContext(CartContext)

  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openCart, setOpenCart] = React.useState(false)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  function logoutFunction(){
    logout()
  } 

  const handleLogout = () => {
    logoutFunction();
    handleCloseUserMenu();
  };

  const redirect = (path) => {
    navigate(path);
  }

  const renderAdminMenu = () => {
    if (signed) {
      return (
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="https://cdn-icons-png.flaticon.com/512/4552/4552981.png" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem href='/cadastrar-item' onClick={() => {
              handleCloseUserMenu()
              redirect('/cadastrar-item')
            }}>
              <Typography textAlign="center"><Link to={'/cadastrar-item'}>Cadastrar Item</Link></Typography>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <Typography textAlign="center">Sair</Typography>
            </MenuItem>
          </Menu>
        </Box>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="w-full h-16 bg-blue-500 relative">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              href="/"
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <CiShop className="text-5xl hover:scale-90 duration-300" />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
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
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={`/`}>Home</Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={`/sobre`}>Sobre</Link>
                  </Typography>
                </MenuItem>
                {!signed && (
                  <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={`/login`}>Login</Link>
                  </Typography>
                </MenuItem>
                )}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <CiShop className="text-3xl duration-300 hover:scale-110" />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={`/`}>Home</Link>
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={`/sobre`}>Sobre</Link>
              </Button>
              {!signed && (
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={`/login`}>Login</Link>
              </Button>
              )}
            </Box>
            <FiShoppingCart onClick={() => setOpenCart(!openCart)} className='text-3xl'/>
            {renderAdminMenu()}
          </Toolbar>
        </Container>
      </AppBar>
      {openCart && (
        <div className='absolute top-[70px] max-[900px]:top-[65px] max-[600px]:top-[63px] rounded-b-2xl border-b-2 border-l-2 border-black z-50 right-0 w-[500px] max-[540px]:w-[100%] bg-gray-300 px-12 max-[540px]:px-2'>
          <div className='flex items-center mt-4'>
            <p onClick={() => setOpenCart(false)} className='text-3xl cursor-pointer'><MdClose/></p>
            <p className='text-2xl font-bold text-center my-2 absolute right-0 left-0 mx-auto w-[150px]'>Carrinho</p>
          </div>
          <div className='flex flex-col gap-2 mt-5'>
            {cart.map((item,index) => (
              <div key={index} className='flex justify-between border-2 rounded-md border-black px-2 items-center relative'>
                <p className='text-lg font-semibold w-[100px]'>{item.produto}</p>
                <p className='text-lg font-semibold absolute left-0 right-0 mx-auto text-center w-[80px]'>R$ {item.price}</p>
                <button className='font-bold' onClick={() => removeItem(item.produto)}><IoMdCloseCircle className='text-2xl text-red-700'/></button>
              </div>
            ))}
            {cart.length > 0 ? (
              <div className='flex justify-between items-center'>
                <p className='text-lg font-semibold'>Total</p>
                <p className='text-lg font-semibold'>R$ {(total).toFixed(2)}</p>
              </div>
            ) : (
              <p className='text-lg font-semibold text-center'>Carrinho vazio</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;