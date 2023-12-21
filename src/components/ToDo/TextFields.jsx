import React, { useState, useRef, useContext } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import { DataContext } from "../../context/DataProvider";
import { v4 as uuid } from "uuid";

const TextBox = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: auto;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  border-color: #e0e0e0;
  width: 60%;
  border-radius: 8px;
  min-height: 35px;
  padding: 10px 15px;
`;

const note = {
  id: "",
  heading: "",
  text: "",
};

const TextFields = () => {
  const [showTextField, setShowTextField] = useState(false);
  const [addNote, setAddNote] = useState({ ...note, id: uuid() });

  const { notes, setNotes } = useContext(DataContext);

  const textBoxRef = useRef();

  const handleClickAway = () => {
    setShowTextField(false);
    textBoxRef.current.style.minheight = "35px";
    setAddNote({ ...note, id: uuid() });

    if (addNote.heading || addNote.text) {
      setNotes((prevArr) => [addNote, ...prevArr]);
    }
  };

  const onTextAreaClick = () => {
    setShowTextField(true);
    textBoxRef.current.style.minheight = "80px";
  };

  const onTextChange = (e) => {
    let changedNote = { ...addNote, [e.target.name]: e.target.value };
    setAddNote(changedNote);
  };
  return (
    <>
      {/* <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Standard" variant="standard" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box> */}
      <ClickAwayListener onClickAway={handleClickAway}>
        <TextBox autoComplete="off" ref={textBoxRef}>
          {showTextField && <TextField placeholder="Title" variant="standard" InputProps={{ disableUnderline: true }} style={{ marginBottom: 10 }} onChange={(e) => onTextChange(e)} name="heading" value={addNote.heading} />}
          <TextField placeholder="Take a note..." multiline maxRows={Infinity} variant="standard" InputProps={{ disableUnderline: true }} onClick={onTextAreaClick} onChange={(e) => onTextChange(e)} name="text" value={addNote.text} />
        </TextBox>
      </ClickAwayListener>
    </>
  );
};

export default TextFields;
