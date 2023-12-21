import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const DeleteIcon = styled(DeleteOutlinedIcon)`
  font-size: 120px;
  color: #ccc;
`;

const Typo = styled(Typography)`
  color: #80868b;
  font-size: 22px;
`;

const Div = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20vh;
`;

const TrashBlankUI = () => {
  return (
    <Div>
      <DeleteIcon fontSize="large" />
      <Typo>No notes in Trash</Typo>
    </Div>
  );
};

export default TrashBlankUI;
