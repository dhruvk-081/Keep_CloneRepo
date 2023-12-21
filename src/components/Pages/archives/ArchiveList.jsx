import React, { useContext } from "react";
import { DataContext } from "../../../context/DataProvider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";

const ArchiveList = (props) => {
  const { note } = props;

  const { notes, setNotes, archiveNotes, setArchiveNotes, setDeleteNotes } = useContext(DataContext);

  const unarchiveNote = (note) => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== note.id);
    setArchiveNotes(updatedNotes);
    setNotes((prevArr) => [note, ...prevArr]);
  };

  const deleteNote = (note) => {
    const updatedNotes = archiveNotes.filter((data) => data.id !== note.id);
    setArchiveNotes(updatedNotes);
    setDeleteNotes((prevArr) => [note, ...prevArr]);
  };

  return (
    <div>
      <Card sx={{ maxWidth: 270 }} style={{ border: "1px solid #ededed" }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {note.heading}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {note.text}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="colors" size="small" style={{ marginLeft: "auto" }}>
            <ColorLensOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" onClick={() => unarchiveNote(note)}>
            <UnarchiveOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" onClick={() => deleteNote(note)}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default ArchiveList;
