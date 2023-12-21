import React, { useContext } from "react";
import { DataContext } from "../../../context/DataProvider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";

const TrashList = (props) => {
  const { del } = props;

  const { notes, setNotes, setAcrchiveNotes, deleteNotes, setDeleteNotes } = useContext(DataContext);

  const restoreNote = (del) => {
    const updatedNotes = deleteNotes.filter((data) => data.id !== del.id);
    setDeleteNotes(updatedNotes);
    setNotes((prevArr) => [del, ...prevArr]);
  };

  const deleteNote = (del) => {
    const updatedNotes = deleteNotes.filter((data) => data.id !== del.id);
    setDeleteNotes(updatedNotes);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 270 }} style={{ border: "1px solid #ededed" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {del.heading}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {del.text}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton size="small" onClick={() => deleteNote(del)} style={{ marginLeft: "auto" }}>
            <DeleteForeverOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" onClick={() => restoreNote(del)}>
            <RestoreOutlinedIcon fontSize="small" />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default TrashList;
