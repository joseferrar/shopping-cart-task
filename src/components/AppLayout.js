import React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";

export default function AppLayout() {
  return (
    <Box>
      <AppHeader />
      <Box sx={{ m: 5 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
