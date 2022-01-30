import React from "react";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import HexagonIcon from "@mui/icons-material/Hexagon";
import NearMeIcon from "@mui/icons-material/NearMe";
import { red } from "@mui/material/colors";
function Estado(props) {
  let estado;
  if (props.velocidad > 5 ) {
    estado = <NearMeIcon color="primary" sx={{ fontSize: 30 }} />;
  } else if (props.velocidad < 4 &&  props.encendido === "IgnicionOff.png") {
    estado = <LocalParkingIcon color="primary" sx={{ fontSize: 30 }} />;
  } 
  else if (props.velocidad < 5 && props.encendido === "IgnicionOn.png" ) {
    estado = <HexagonIcon color="primary" sx={{ fontSize: 30, color: red[500]  }} />;
  } 
  return <div>{estado}</div>;
}

export default Estado;
