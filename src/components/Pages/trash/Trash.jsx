import React, { useContext } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { v4 as uuid } from "uuid";

import TrashBlankUI from "../../BlankUI/TrashBlankUI";
import TrashList from "./TrashList";
import { DataContext } from "../../../context/DataProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Trash = () => {
  const { deleteNotes } = useContext(DataContext);
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {deleteNotes.length == 0 ? (
          <TrashBlankUI />
        ) : (
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ margin: "15px 0" }}>
            {deleteNotes.map((del) => (
              <Grid item xs={2} sm={4} md={3} key={uuid()}>
                <TrashList del={del} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </>
  );
};

export default Trash;
