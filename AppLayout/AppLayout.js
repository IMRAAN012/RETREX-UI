/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { MENU } from "constants/menu.config";
import { ReactComponent as Logo } from "assets/svg/Logo.svg";
import { Notifications } from "@mui/icons-material";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import { Firstbox, layoutcont } from "./AppLayout.style";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  // ...(open && {
  //   marginLeft: drawerWidth,
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   transition: theme.transitions.create(["width", "margin"], {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function AppLayout(props) {
  const { children } = props;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState("Dashboard");

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar
          sx={{
            backgroundColor: "#FAFAFA",
            minHeight: "60px !important",
          }}
        >
          <IconButton
            aria-label="toggle drawer"
            onClick={() => setOpen(!open)}
            edge="start"
            sx={{
              marginRight: 1,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Logo />
          <Box p={3} />
          <Box sx={{ flexGrow: 1 }}>
            <Box
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "500px",
                backgroundColor: "#F2F2F2",
                borderRadius: "100px",
                height: "48px",
              }}
            >
              <IconButton disabled sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{
                  ml: 1,
                  flex: 1,
                  "& ::placeholder": {
                    color: "rgba(17, 35, 71, 0.41)",
                  },
                }}
                placeholder="Search here"
                inputProps={{
                  "aria-label": "Search here",
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#f4f4f4",
              alignItems: "center",
              justifyContent: "center",
              p: 0.75,
              borderRadius: 1,
            }}
          >
            <ListItem sx={{ p: 0 }}>
              <Notifications htmlColor="#717171" />
              <Box px={0.5} />
              <ListItemText
                primary="0"
                sx={{ color: "#717171", fontWeight: "bold" }}
              />
            </ListItem>
          </Box>
          <Box p={1} />
          <Box
            sx={{
              backgroundColor: "#717171",
              alignItems: "center",
              justifyContent: "center",
              p: 0.75,
              borderRadius: 1,
            }}
          >
            <Typography fontWeight={700} color="#FFFFFF">
              KG
            </Typography>
          </Box>
        </Toolbar>
        <Toolbar variant="dense" sx={{ backgroundColor: "#345B83" }}>
          <Box width={273} height={26} sx={{ backgroundColor: "#fff" }}>
            <OtherHousesOutlinedIcon sx={{ color: "#000" }} />
            <Typography fontSize={10} fontWeight={400} sx={{ color: "#000" }}>
              Just Listed - 43 Knowles Avenue I North Bondi
            </Typography>
          </Box>
          <Box width={278} height={26} sx={{ backgroundColor: "#fff" }}>
            <OtherHousesOutlinedIcon sx={{ color: "#000" }} />
            <Typography fontSize={10} fontWeight={400} sx={{ color: "#000" }}>
              Sold - 2 Hardy Street l Dover Heights ($5,210,195)
            </Typography>
          </Box>
          <Box width={363} height={25} sx={{ backgroundColor: "#fff" }}>
            <OtherHousesOutlinedIcon sx={{ color: "#000" }} />
            <Typography fontSize={10} fontWeight={400} sx={{ color: "#000" }}>
              Offer Recieved - 1/12 Warners Avanue l Bondi Beach (1,050,000)
            </Typography>
          </Box>
          <Box width={280} height={26} sx={{ backgroundColor: "#fff" }}>
            <OtherHousesOutlinedIcon sx={{ color: "#000" }} />
            <Typography fontSize={10} fontWeight={400} sx={{ color: "#000" }}>
              Sold - 2 Hardy Street l Dover Heights ($5,210,195)
            </Typography>
          </Box>
          <Box width={363} height={25} sx={{ backgroundColor: "#fff" }}>
            <OtherHousesOutlinedIcon sx={{ color: "#000" }} />
            <Typography fontSize={10} fontWeight={400} sx={{ color: "#000" }}>
              Offer Recieved - 1/12 Warners Avanue l Bondi Beach (1,050,000)
            </Typography>
          </Box>
          <Box width={280} height={26} sx={{ backgroundColor: "#fff" }}>
            <OtherHousesOutlinedIcon sx={{ color: "#000" }} />
            <Typography fontSize={10} fontWeight={400} sx={{ color: "#000" }}>
              Sold - 2 Hardy Street l Dover Heights ($5,210,195)
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        open={open}
        sx={{
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar
          sx={{
            minHeight: "60px !important",
          }}
        />
        <Toolbar variant="dense" />
        <List>
          {MENU.all_users.map((menu, index) => (
            <ListItem
              key={menu.menu_name}
              disablePadding
              sx={{
                display: "block",
                paddingTop: menu.menu_name === "FAQ" ? "7em" : "",
              }}
              onClick={() => {
                setActiveMenu(menu.menu_name);
              }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    backgroundImage:
                      activeMenu === menu.menu_name
                        ? "linear-gradient(162.58deg, #6C2AD2 1.87%, #77CFFE 98.78%)"
                        : "#FFFFFF",
                    p: 0.75,
                    borderRadius: 100,
                  }}
                >
                  {activeMenu === menu.menu_name
                    ? menu.active_menu_icon
                    : menu.menu_icon}
                </ListItemIcon>
                <ListItemText
                  primary={menu.menu_name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 2, background: "#FAFAFA" }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AppLayout;
