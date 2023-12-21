import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  //   width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const EditNoteModal = ({ open, handleSave, handleClose, editedNote, setEditedNote }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 2,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography variant="h6" component="div" gutterBottom>
          Edit Note
        </Typography>
        <TextField label="Heading" fullWidth value={editedNote.heading} onChange={(e) => setEditedNote({ ...editedNote, heading: e.target.value })} margin="normal" />
        <TextField label="Text" fullWidth multiline rows={4} value={editedNote.text} onChange={(e) => setEditedNote({ ...editedNote, text: e.target.value })} margin="normal" />
        <Stack spacing={2} direction="row" style={{ marginLeft: "auto" }}>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};
