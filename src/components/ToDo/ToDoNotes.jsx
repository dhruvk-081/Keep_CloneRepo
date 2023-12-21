import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import TextFields from "./TextFields";
import ToDoList from "./ToDoList";
import { DataContext } from "../../context/DataProvider";
import { v4 as uuid } from "uuid";
import NotesBlankUI from "../BlankUI/NotesBlankUI";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const ToDoNotes = () => {
  const { notes } = useContext(DataContext);
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <TextFields />
        {notes.length == 0 ? (
          <NotesBlankUI />
        ) : (
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ margin: "15px 0" }}>
            {notes.map((note) => (
              <Grid item xs={2} sm={4} md={3} key={uuid()}>
                <ToDoList note={note} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};
export default ToDoNotes;
