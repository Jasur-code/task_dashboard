import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Apps,
  Call,
  Folder,
  Gamepad,
  Group,
  NotificationAdd,
  Notifications,
  PieChart,
  Search,
  Settings,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useRouter } from "next/router";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

const ListItems = [
  {
    title: "Dashboard",
    icon: <Apps />,
    path: "/"
  },
  {
    title: "Teams",
    icon: <Gamepad />,
    path:"/teams"
  },
  {
    title: "Employes",
    icon: <Group />,
    path:"/employes"
  },
  {
    title: "Projects",
    icon: <PieChart />,
    path:"/projects"
  },
];

const ListItems2 = [
  {
    title: "Meetings",
    icon: <Call />,
    path:"/meetings"
  },
  {
    title: "Tasks",
    icon: <Folder />,
    path:"/tasks"
  },
  {
    title: "Settings",
    icon: <Settings />,
    path:"/settings"
  },
];

export default function Layout({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const router = useRouter()

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="static" open={open} sx={{ boxShadow: "none" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Box>
              <Typography
                variant="h5"
                component={"h5"}
                sx={{ fontWeight: "bold" }}
              >
                Good Morning Anima
              </Typography>
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "gray",
                  margin: "0px",
                }}
              >
                Hope you have a good day
              </p>
            </Box>
          </Box>

          <Box
            sx={{ display: "flex", gap: "10px", alignItems: "center", mr: 3 }}
          >
            <IconButton sx={{ color: "black" }}>
              <Search />
            </IconButton>
            <IconButton sx={{ color: "black" }}>
              <Notifications />
            </IconButton>
            <Avatar
              alt="Cindy Baker"
              src="https://mui.com/static/images/avatar/3.jpg"
            />
          </Box>
        </Toolbar>

        <Toolbar>
          <Box open={open} sx={{ flexGrow: 1 }}>
            {children}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box
            sx={{ display: "flex", alignItems: "center", ml: 4, gap: "10px" }}
          >
            <Settings sx={{ color: "#6956E5" }} />
            <Typography
              variant="p"
              component={"p"}
              sx={{
                color: "#6956E5",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Teamify
            </Typography>
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <List sx={{ mt: 3 }}>
          {ListItems.map((item, index) => (
            <ListItem key={item} disablePadding onClick={() => router.push(item.path)}>
              <ListItemButton
                sx={{ color: "gray", "&:hover": { color: " #6956E5" } }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List sx={{ mt: 3 }}>
          {ListItems2.map((item, index) => (
            <ListItem
              key={item}
              disablePadding
              sx={{ color: "gray", "&:hover": { color: " #6956E5" } }}
              onClick={() => router.push(item.path)}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>


        <Box
          sx={{
            background: "#E0DDFA",
            borderRadius: "12px",
            position: "relative",
            mt: 6,
            width: "80%",
            height: "300px",
            ml: 3,
          }}
        >
          <img
            style={{
              position: "absolute",
              width: "150px",
              left: "12%",
              top: "-16%",
            }}
            src="https://www.linkpicture.com/q/drawer-removebg-preview.png"
            alt=""
          />
          <button
            style={{
              background: "white",
              padding: "6px 16px",
              border: "none",
              position: "absolute",
              bottom: "5%",
              left: "10%",
              borderRadius:"8px"
            }}
          >
            Share Your Thoughts
          </button>
        </Box>
      </Drawer>
    </Box>
  );
}
