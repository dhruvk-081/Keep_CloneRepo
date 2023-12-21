import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Link } from "react-router-dom";

const NavList = () => {
  const navListItems = [
    { id: 1, name: "Notes", icon: <LightbulbOutlinedIcon />, route: "/" },
    { id: 2, name: "Archives", icon: <ArchiveOutlinedIcon />, route: "/archives" },
    { id: 3, name: "Trash", icon: <DeleteOutlinedIcon />, route: "/trash" },
  ];

  return (
    <>
      <List>
        {navListItems.map((list) => (
          <ListItem key={list.id} disablePadding sx={{ display: "block" }}>
            <Link to={list.route} style={{textDecoration:"none", color:'inherit'}}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {list.icon}
                </ListItemIcon>
                <ListItemText primary={list.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default NavList;
