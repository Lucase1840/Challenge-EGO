import * as React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ReactComponent as Logo } from "../../publicImages/LogoEgo.svg"

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

export default function NavBar() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const screenWidth = useMediaQuery('(min-width:380px)');
    const location = useLocation();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleClick = () => {
        navigate("/")
    };

    return (
        <Box sx={{ maxWidth: `calc(100% - ${drawerWidth}px)`, }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ boxShadow: 1, }}>
                <Toolbar sx={{ display: "flex", background: "#FFFFFF", boxShadow: 0, color: "black", justifyContent: "flex-start", mt: { xs: "-1px" } }}>
                    <Box sx={{ mr: "35px" }}>
                        <Logo />
                    </Box>
                    <Box sx={{ display: "flex", minWidth: { xl: "350px" }, justifyContent: "space-around" }}>
                        {screenWidth && <Typography onClick={handleClick} sx={location.pathname === "/"
                            ? { p: 2, boxShadow: "0px 3px 0px 0px red", alignSelf: "flex-end", fontWeight: "bold", cursor: { xl: "pointer" } }
                            : { p: 2, alignSelf: "flex-end", fontWeight: "bold", }}
                        >Modelos</Typography>}

                        {screenWidth && <Typography onClick={handleClick} sx={location.pathname !== "/"
                            ? { p: 2, boxShadow: "0px 3px 0px 0px red", alignSelf: "flex-end", fontWeight: "bold" }
                            : { p: 2, alignSelf: "flex-end", fontWeight: "bold" }}
                        >Ficha de modelo</Typography>}
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        sx={{ ...(open && { display: 'none' }), fontSize: { xs: "0", xl: "1rem" }, ml: { xs: "240px", xl: "1370px" } }}
                    >Menú
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Main open={open}>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                        },
                    }}
                    variant="persistent"
                    anchor="right"
                    open={open}
                >
                    <DrawerHeader sx={{
                        width: { xs: "40%" }
                    }}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider sx={{
                        marginLeft: "32px",
                        marginRight: "20px",
                    }} />
                    <List disablePadding={true}>
                        {['Modelos', 'Servicios y Accesorios', 'Financiación', 'Reviews y Comunidad'].map((text, i) => (
                            <ListItem key={i} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider sx={{
                        marginLeft: "32px",
                        marginRight: "20px",
                    }} />
                    <List>
                        {['Toyota Mobility Service', 'Toyota Gazoo Racing', 'Toyota Híbridos'].map((text, i) => (
                            <ListItem key={i} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider sx={{
                        marginLeft: "32px",
                        marginRight: "20px",
                    }} />
                    <List>
                        {['Concesionarios', 'Test Drive', 'Contacto'].map((text, i) => (
                            <ListItem key={i} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <List sx={{
                        backgroundColor: "#EFEEEF",
                        height: { xl: "100%" }
                    }}>
                        {['Actividades', 'Servicios al Cliente', 'Ventas Especiales', 'Innovación', 'Prensa', 'Acerca de...'].map((text, i) => (
                            <ListItem key={i} disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Main>
        </Box >
    );
}
