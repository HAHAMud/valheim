import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Container,
  Toolbar,
  Menu,
  Box,
  IconButton,
  Typography,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '@/assets/valheim_logo.png';
import { navbarItems } from '@/module/navbar';
import { NavbarItemsType } from '@/module/navbar/type';

const NavItem = ({
  navItem,
  handleCloseNavMenu,
}: {
  navItem: NavbarItemsType;
  handleCloseNavMenu: () => void;
}) => {
  const navigate = useNavigate();

  const onClickToPage = () => {
    navigate(navItem.path);
    handleCloseNavMenu();
  };

  return (
    <MenuItem onClick={onClickToPage}>
      <Typography textAlign="center">{navItem.title}</Typography>
    </MenuItem>
  );
};

const LogoItem = ({ className }: { className?: object }) => {
  return (
    <Typography variant="h5" noWrap component="a" href="/" sx={className}>
      <img src={Logo} alt="logo" />
    </Typography>
  );
};

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <LogoItem
            className={{
              mr: 2,
              width: '80px',
              height: '80px',
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          />

          {/* Menu */}
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
              {navbarItems.map((navItem: NavbarItemsType) => (
                <NavItem
                  key={navItem.title}
                  navItem={navItem}
                  handleCloseNavMenu={handleCloseNavMenu}
                />
              ))}
            </Menu>
          </Box>

          {/* RWD LOGO */}
          <LogoItem
            className={{
              mr: 2,
              width: '80px',
              height: '80px',
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          />

          {/* RWD Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navbarItems.map((navItem: NavbarItemsType) => (
              <NavItem
                key={navItem.title}
                navItem={navItem}
                handleCloseNavMenu={handleCloseNavMenu}
              />
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
