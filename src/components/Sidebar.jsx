import * as React from "react";
import PropTypes from "prop-types";
import { Suspense } from "react";
import { Stack, IconButton, Popover, Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Tooltip from "@mui/material/Tooltip";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SearchIcon from "@mui/icons-material/Search";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout, ThemeSwitcher } from "@toolpad/core/DashboardLayout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import usericon from "../assets/usericon.png";
import { useState } from "react";
import "../styles/Sidebar.css";
import LayersIcon from "@mui/icons-material/Layers";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import arrow from "../assets/arrow.png";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useTheme } from "@mui/material/styles";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CoursesPage from "../pages/CoursesPage ";
import DasboardPage from "../pages/DasboardPage";
import Mcq from "../pages/Mcq";
import Codingproblem from "../pages/Codingproblem";
import Problemsolving from "../pages/Problemsolving";
import Attendence from "../pages/Attendence";
import Notes from "../pages/Notes";
import Signout from "../pages/Signout";
import { useDemoRouter } from "@toolpad/core/internal";

const NAVIGATION = [
  {
    kind: "header",
    title: "Overview",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon sx={{ color: (theme) => theme.palette.mode === "dark" ? "white !important" : "#1e3050 !important" }} />,
  },
  {
    kind: "header",
    title: "Academic",
  },
  {
    segment: "Courses",
    title: "Courses",
    icon: <MenuBookIcon sx={{ color: (theme) => theme.palette.mode === "dark" ? "white !important" : "#1e3050 !important"}} />,
  },
  {
    kind: "header",
    title: "Practice",
  },
  {
    segment: "mcq",
    title: "MCQ",
    icon: <LayersIcon sx={{ color: (theme) => theme.palette.mode === "dark" ? "white !important" : "#1e3050 !important"}} />,
  },
  {
    segment: "codingproblem",
    title: "Coding Problem",
    icon: <CodeOffIcon sx={{color: (theme) => theme.palette.mode === "dark" ? "white !important" : "#1e3050 !important" }} />,
  },
  {
    kind: "header",
    title: "My Activity",
  },
  {
    segment: "problemsolving",
    title: "Problem Solving",
    icon: <img src={arrow} alt="" className="arrow" />,
  },
  {
    segment: "attendence",
    title: "Attendence",
    icon: <CalendarTodayIcon sx={{ color: (theme) => theme.palette.mode === "dark" ? "white !important" : "#1e3050 !important" }} />,
  },
  {
    kind: "header",
    title: "Resources",
  },
  {
    segment: "notes",
    title: "Notes",
    icon: <EditNoteIcon sx={{  color: (theme) => theme.palette.mode === "dark" ? "white !important" : "#1e3050 !important" ,}} />,
  },
  {
    segment: "signout",
    title: "Signout",
    icon: <ExitToAppIcon sx={{ color: "#fdc00c !important"}} />,
    element: <Link to="/signout">Signout</Link>,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  palette: {
    primary: {
      main: "rgb(17, 0, 255)",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }) {
  if (pathname === "/dashboard") {
    return (
      <Box>
        <DasboardPage />
      </Box>
    );
  } else if (pathname === "/Courses") {
    return (
      <Box>
        <CoursesPage />
      </Box>
    );
  } else if (pathname === "/mcq") {
    return (
      <Box>
        <Mcq />
      </Box>
    );
  } else if (pathname === "/codingproblem") {
    return (
      <Box>
        <Codingproblem />
      </Box>
    );
  } else if (pathname === "/problemsolving") {
    return (
      <Box>
        <Problemsolving />
      </Box>
    );
  } else if (pathname === "/attendence") {
    return (
      <Box>
        <Attendence />
      </Box>
    );
  } else if (pathname === "/notes") {
    return (
      <Box>
        <Notes />
      </Box>
    );
  } else if (pathname === "/signout") {
    return (
      <Box>
        <Signout />
      </Box>
    );
  }
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};

function ToolbarActionsSearch() {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? "settings-popover" : undefined;

  // Theme Switcher
  // const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // function Themswitcher() {
  //   const newTheme = theme === 'light' ? 'dark' : 'light';
  //   setTheme(newTheme);
  //   localStorage.setItem('theme', newTheme);
  //   document.getElementById("bodysidebar").setAttribute("data-toolpad-color-scheme", newTheme);
  // }
  const [click, setClick] = useState(localStorage.getItem("click") === "false");

  React.useEffect(() => {
    document.getElementById("bodysidebar").style.backgroundColor = click ? "black" : "#f5f5f5";
    document.getElementById("first").style.backgroundColor = click ? "#121f3d" : "#edeffc";
    document.getElementById("second").style.backgroundColor = click ? "#121f3d" : "#edeffc";
    document.getElementById("fourth").style.backgroundColor = click ? "#121f3d" : "#edeffc";
    document.getElementById("event1").style.backgroundColor = click ? "#121f3d" : "#dddddd";
    document.getElementById("event2").style.backgroundColor = click ? "#121f3d" : "#dddddd";
    document.getElementById("view").style.backgroundColor = click ? "#121f3d" : "#e3e3e3";
    document.getElementById("textdeadline").style.color = click ? "white" : "#333";
    document.getElementById("textdeadline2").style.color = click ? "white" : "#333";
  }, [click]); 
  
  function Themswitcher() {
    const newClick = !click;
    setClick(newClick);
    localStorage.setItem("click", newClick);
  }
  

    return (
    <Stack direction="row" alignItems="center" >
      <IconButton sx={{ color: "#23a648", mr:{lg:2,md:0,xs:0}  }}>
        <NotificationsIcon sx={{display:{xs:"none",md:"block",lg:"block"}}} />
      </IconButton>
      <IconButton
        onClick={handleOpen}
        sx={{ color: "#23a648", mr: {lg:3,md:2} }}
        aria-describedby={popoverId}
      >
        <SettingsIcon sx={{fontSize:{xs:"18.1px",md:"25px",lg:"25px"}}} />
      </IconButton>
      <Popover
        id={popoverId}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{ mt: 1 }} 
      >
        <Box
          sx={{
            p: 2,
            minWidth: 180,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: "bold" }}>
            Theme Settings
          </Typography>
          <IconButton onClick={Themswitcher} >
            <ThemeSwitcher />
          </IconButton>
        </Box>
      </Popover>
      <img src={usericon} alt="User" className="usericon" />
    </Stack>
  );
}

function CustomAppTitle() {
  return (
    <>
      <Stack direction="row" alignItems="center" spacing={2}>
        <i className="fa-solid fa-book-open-reader"></i>
        <Typography variant="h6" sx={{fontSize: { xs: "0px", sm: "18px", md: "16px", lg: "24px" ,},
             display: { xs:"none",sm: "block",md: "block", lg: "block" },
        fontWeight: "550"  }} >
          Student Dashboard
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center">
        <Typography
          variant="h6"
          sx={{fontSize: { xs: "13px", sm: "18px", md: "16px", lg: "22px" }, fontWeight: "550", marginLeft: {lg:"30px",xs:"10px"} }}
        >
          Welcome Back, <span className="studentname">Student</span>{" "}
        </Typography>
        <Tooltip title="Search" enterDelay={1000}>
          <div>
            <IconButton
              type="button"
              aria-label="search"
              sx={{
                display: { xs: "inline", md: "none" },
                fontSize: { xs: "10px", sm: "18px", md: "16"}
              }}
            >
              <SearchIcon sx={{
                fontSize: { xs: "18px", sm: "18px", md: "16px",lg:"25px"},
                  ml: { xs: "6px"},
              }}/>
            </IconButton>
          </div>
        </Tooltip>
        <TextField
          placeholder="Search"
          variant="outlined"
          size="small"
          fullWidth
          className="searchfield"
          InputProps={{
            endAdornment: (
              <IconButton type="button" aria-label="search" size="small">
                <SearchIcon
                  sx={{ color: "green", "&:hover": { color: "#23a648" }}}
                />
              </IconButton>
            ),
            sx: {
              borderRadius: "25px",
              height: "33px",
            },
          }}
          sx={{
            display: { xs: "none", md: "inline-block" },
            width: { xs: "10px", sm: "10px", md: "120px", lg: "450px" },
            ml:{xs:0,sm:0,md:2  ,lg:10}
          }}
        />
      </Stack>
    </>
  );
}

function DashboardLayoutSlots(props) {
  const { window } = props;
  const router = useDemoRouter("/dashboard");
  return (
    <div className="bodysidebar" id="bodysidebar">
      <AppProvider navigation={NAVIGATION} router={router} theme={demoTheme}>
        <DashboardLayout
          slots={{
            appTitle: CustomAppTitle,
            toolbarActions: ToolbarActionsSearch,
          }}
        >
          <DemoPageContent pathname={router.pathname} />
        </DashboardLayout>
      </AppProvider>
    </div>
  );
}

export default DashboardLayoutSlots;
