import React, { useState, useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";

import { DataContext } from "../../context/DataProvider";
import { EditNoteModal } from "../Modal/EditNoteModal";
// import { DeleteModal } from "../Modal/DeleteModal";

const ToDoList = (props) => {
  const { note, handleOpen } = props;
  const { notes, setNotes, setArchiveNotes, updateNote, setDeleteNotes } = useContext(DataContext);

  const [openEditModal, setOpenEditModal] = useState(false);
  const [editedNote, setEditedNote] = useState(note);
  // const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const colorBox = (note) => {
    alert("This is not working")
  };
  const archiveNote = (note) => {
    const updatedNotes = notes.filter((data) => data.id !== note.id);
    setNotes(updatedNotes);
    setArchiveNotes((prevArr) => [note, ...prevArr]);
  };

  const deleteNote = (note) => {
    // confirm("Are you sure")
    if (confirm("Are you sure") == true) {
      const updatedNotes = notes.filter((data) => data.id !== note.id);
      setNotes(updatedNotes);
      setDeleteNotes((prevArr) => [note, ...prevArr]);
    } else {
      setNotes(updatedNotes);
    }
  };



  const handleEdit = () => {
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  // const handleDeleteModal = () => {
  //   setOpenDeleteModal(true);
  // };

  // const handleCloseDeleteModal = () => {
  //   setOpenDeleteModal(false);
  // };

  const handleSaveEdit = () => {
    updateNote(editedNote);
    handleCloseEditModal();
  };

  return (
    <>
      <Card sx={{ maxWidth: 270 }} style={{ border: "1px solid #ededed" }}>
        <CardContent onClick={handleEdit}>
          <Typography variant="h5" component="div">
            {note.heading}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {note.text}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="colors" size="small" style={{ marginLeft: "auto" }} onClick={() => colorBox(note)}>
            <ColorLensOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" onClick={() => archiveNote(note)}>
            <ArchiveOutlinedIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" onClick={() => deleteNote(note)}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        </CardActions>
      </Card>
      <EditNoteModal open={openEditModal} handleClose={handleCloseEditModal} editedNote={editedNote} setEditedNote={setEditedNote} handleSave={handleSaveEdit} />
      {/* <DeleteModal open={openDeleteModal} handleClose={handleCloseDeleteModal} deleteNote={deleteNote(note)} /> */}
    </>
  );
};

export default ToDoList;
