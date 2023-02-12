"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 6,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#ff003d" : "#ff003d",
  },
}));

const style = {
  position: "absolute",
  top: "0",
  left: "0%",
  width: "100%",
  height: "100%",
  color: "#ff003d",
  justifyContent: "center",

  p: 4,
};
const stylee = {
  position: "absolute",
  top: "50%",
  left: "50%",
  width: "20%",
  borderColor: "#ff003d",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#ff003d",
  justifyContent: "center",
  color: "#ff003d",
};

export default function Loading() {
  return (
    <Box sx={style}>
      <BorderLinearProgress sx={stylee} />
    </Box>
  );
}
export const config = {
  unstable_runtimeJS: false,
};
