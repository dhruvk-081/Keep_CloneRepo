import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";

const ArchiveIcon = styled(ArchiveOutlinedIcon)`
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

const ArchiveBlankUI = () => {
  return (
    <Div>
      <ArchiveIcon fontSize="large" />
      <Typo>Your archived notes appear here</Typo>
    </Div>
  );
};

export default ArchiveBlankUI;
