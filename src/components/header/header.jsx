import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LensBlurIcon from '@mui/icons-material/LensBlur';
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from '../../utils/theme';
import { AppRoute } from '../../utils/const';
import { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';

export default function Header() {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const navigate = useNavigate();
    const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
    const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);
    const handleCloseUserMenu = () => setAnchorElUser(null);
    return (
        <ThemeProvider theme={darkTheme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <LensBlurIcon fontSize='large' cursor='pointer' sx={{display: { xs: 'none', md: 'flex' }}} />
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
                                    <MenuItem key="marketplace" onClick={() => navigate(AppRoute.FEMSolvers)}>
                                        <Typography textAlign="center">МКЭ-расчет</Typography>
                                    </MenuItem>
                                    <MenuItem key="map" onClick={() => navigate(AppRoute.EffectiveChars)}>
                                        <Typography textAlign="center">Эффективные характеристики</Typography>
                                    </MenuItem>
                                </Menu>
                            </Box>
                            <Typography
                                variant="h6"
                                noWrap
                                component="div"
                                onClick={() => navigate("/")}
                                sx={{ ml: 2, mr: 2, display: { xs: 'none', md: 'flex' }, fontStyle: 'bold', textTransform: 'uppercase', cursor: 'pointer' }}
                            >
                                СМКК
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <Button
                                    key="solvers"
                                    onClick={() => navigate(AppRoute.FEMSolvers)}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    МКЭ-расчет
                                </Button>
                                <Button
                                    key="chars"
                                    onClick={() => navigate(AppRoute.EffectiveChars)}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Эффективные характеристики
                                </Button>
                                <Button
                                    key="chars"
                                    onClick={() => navigate(AppRoute.About)}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    О программе
                                </Button>
                            </Box>
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="" />
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
                                    <MenuItem key="profile">
                                        <Typography textAlign="center">Profile</Typography>
                                    </MenuItem>
                                    <MenuItem key="login">
                                        <Typography textAlign="center">Login</Typography>
                                    </MenuItem>
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
        </ThemeProvider >
    );
}

