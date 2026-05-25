import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Drawer,
  IconButton,
  useMediaQuery,
  Switch,
} from "@mui/material";

import { styled, useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { NavLink, Outlet } from "react-router";

import { FaUsers, FaPlus } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { IoIosInformationCircle } from "react-icons/io";
import { TbCodeCircle2Filled } from "react-icons/tb";

import { HiMenuAlt3 } from "react-icons/hi";
import style from "./LeftPanel.module.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const MainPanel = ({ mode, toggleTheme }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const LeftPanel = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    background:
      mode === "dark"
        ? "linear-gradient(180deg, #121212 0%, #1E1E1E 100%)"
        : "linear-gradient(180deg, #2A1E8C 0%, #1A124F 100%)",
    color: "#ffff",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: isMobile ? "100%" : "100vh",
    borderRadius: 0,
  }));

  const RightPanel = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    background: theme.palette.background.paper,
    color: theme.palette.text.primary,
    padding: "18px",
    display: "flex",
    flexDirection: "column",
    overflowX: "hidden",
    border: "none",
    borderRadius: 0,
  }));

  const SidebarContent = () => {
    return (
      <LeftPanel>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            component={"h6"}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: "10px",
            }}
          >
            <FaUsers size={30} style={{ color: "#C7C9FF" }} />
            CRUD App
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", m: 2 }}>
            {mode === "dark" ? <MdDarkMode /> : <MdLightMode />}
            <Switch checked={mode === "dark"} onChange={toggleTheme} />
          </Box>

          <NavLink
            to={"/"}
            onClick={() => setOpenDrawer(false)}
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : `${style.link}`
            }
          >
            <Typography
              component={"p"}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <HiUsers />
              Users
            </Typography>
          </NavLink>

          <NavLink
            to={"add-user"}
            onClick={() => setOpenDrawer(false)}
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : `${style.link}`
            }
          >
            <Typography
              component={"p"}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <FaPlus />
              Add User
            </Typography>
          </NavLink>

          <NavLink
            to={"about"}
            onClick={() => setOpenDrawer(false)}
            className={({ isActive }) =>
              isActive ? `${style.link} ${style.active}` : `${style.link}`
            }
          >
            <Typography
              component={"p"}
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
            >
              <IoIosInformationCircle />
              About
            </Typography>
          </NavLink>
        </Box>

        <Box>
          <hr />

          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              justifyContent: "center",
            }}
            component={"p"}
          >
            <TbCodeCircle2Filled size={25} style={{ color: "#C7C9FF" }} />
            React JS CRUD App
          </Typography>
        </Box>
      </LeftPanel>
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* MOBILE TOPBAR */}

      {isMobile && (
        <Box
          sx={{
            height: "70px",
            background: mode === "dark" ? "#1E1E1E" : "#2A1E8C",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
          }}
        >
          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <FaUsers />
            CRUD App
          </Typography>

          <IconButton
            sx={{ color: "white" }}
            onClick={() => setOpenDrawer(true)}
          >
            <HiMenuAlt3 size={28} />
          </IconButton>
        </Box>
      )}

      <Grid container>
        {/* DESKTOP SIDEBAR */}

        {!isMobile && (
          <Grid size={{ md: 2 }}>
            <SidebarContent />
          </Grid>
        )}

        {/* MOBILE DRAWER */}

        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <Box sx={{ width: 260 }}>
            <SidebarContent />
          </Box>
        </Drawer>

        {/* RIGHT PANEL */}

        <Grid size={{ xs: 12, md: 10 }}>
          <RightPanel>
            <Outlet />
          </RightPanel>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainPanel;
