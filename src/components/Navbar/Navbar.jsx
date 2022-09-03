import { useState, useEffect, useContext } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from "@mui/material";
import { Menu, AccountCircle, Brightness4, Brightness7 } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { Search, Sidebar } from '../index';
import { ColorModeContext } from "../../utils/ToggleColorMode";

function Navbar() {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)');
    const theme = useTheme();

    const [ mobileOpen, setMobileOpen ] = useState(false);

    const colorMode = useContext(ColorModeContext);

    const token = localStorage.getItem('request_token');
    const sessionIdFromLocalStorage = localStorage.getItem('session_id');

    return(
        <>
            <AppBar position={'fixed'}>
                <Toolbar className={classes.toolbar}>
                    {isMobile && (
                        <IconButton
                            color="inherit"
                            edge="start"
                            style={{ outline: 'none' }}
                            onClick={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
                            className={classes.menuButton}
                            >
                            <Menu />
                        </IconButton>
                    )}
                    <IconButton
                        color={'inherit'}
                        sx={{ ml: 1}}
                        onClick={colorMode.toggleColorMode}
                    >
                        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                    {!isMobile && <Search />}
                </Toolbar>
            </AppBar>
            <div>
                <nav className={classes.drawer}>
                    {isMobile ? (
                        <Drawer
                            variant="temporary"
                            anchor="left"
                            open={mobileOpen}
                            onClose={() => setMobileOpen((prevMobileOpen) => !prevMobileOpen)}
                            classes={{ paper: classes.drawerPaper }}
                            ModalProps={{ keepMounted: true }}
                        >
                            <Sidebar setMobileOpen={setMobileOpen} />
                        </Drawer>
                    ) : (
                        <Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
                            <Sidebar setMobileOpen={setMobileOpen} />
                        </Drawer>
                    )}
                </nav>
            </div>
        </>
    )
}

export default Navbar;