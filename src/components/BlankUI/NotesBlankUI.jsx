import React from 'react'
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";


const Lightbulb = styled(LightbulbOutlinedIcon)`
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


const NotesBlankUI = () => {
  return (
    <Div>
      <Lightbulb fontSize="large" />
      <Typo>Notes you add appear here</Typo>
    </Div>
  );
}

export default NotesBlankUI
