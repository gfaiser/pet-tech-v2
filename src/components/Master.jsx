import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';

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
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = [
    { label: "Idosos", url: "elderly" },
    { label: "Comprar ou adotar", url: "purchase" },
    { label: "Gatos", url: "cats" },
    { label: "Pet shops", url: "pets-shop" },
    { label: "Hospitais e clínicas", url: "hospitals" },
    { label: "Veterinário Voluntario", url: "volunteer" },
    { label: "Equipe", url: "contact" }
];

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <span>
                Projeto integrador v2
            </span>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            <AppBar position="static" style={{}}>
                <Container maxWidth="xl" style={{ backgroundColor: "white" }}>
                    <Toolbar disableGutters>
                        <Link to="/" style={{ display: "flex", color: "black", alignItems: "center" }}>
                            <Avatar
                                alt="Remy Sharp"
                                src="/assets/logo.png"
                                sx={{ display: { xs: 'none', md: 'flex' }, width: 56, height: 56 }}
                            />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                    color: "black"
                                }}
                            >
                                Pet Tech
                            </Typography>
                        </Link>
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
                                    color: "black"
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" style={{ color: "black" }}>{page.label}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Avatar
                            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, width: 56, height: 56 }}
                            alt="Remy Sharp"
                            src="/assets/logo.png"
                        />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontWeight: 700,
                                textDecoration: 'none',
                                color: "black"
                            }}
                        >
                            Pet Tech
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} />

                        <Box sx={{ flexGrow: 0, display: "flex" }}>
                            {pages.map((page) => (
                                <Button
                                    key={page.label}
                                    sx={{ my: 2, color: 'black', display: 'block' }}
                                    component={Link}
                                    to={page.url}
                                >
                                    {page.label}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar >

            <Outlet />

            <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
                <Container maxWidth="lg">
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                        component="p"
                    >
                        Projeto integrador - Univesp
                    </Typography>
                    <Copyright />
                </Container>
            </Box>
        </>

    );
}
export default ResponsiveAppBar;
