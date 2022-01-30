import * as React from "react";
import TAF from "./TAF";
import moment from "moment";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import axios from "axios";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import Stack from "@mui/material/Stack";
import { format } from "date-fns";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export default function Informe() {
  let curr_date = moment().local().format("YYYY-MM-DD");
  //console.log(curr_date);
  var dt = new Date();
  var horai = "00:00:01";
  var horaf = "23:59:00";
  const tiempoi = `${dt.getFullYear().toString().padStart(4, "0")}-${(
    dt.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${dt.getDate().toString().padStart(2, "0")}`;
  const tiempof = `${(dt.getMonth() + 1).toString().padStart(2, "0")}-${dt
    .getDate()
    .toString()
    .padStart(2, "0")}-${dt
    .getFullYear()
    .toString()
    .padStart(4, "0")} ${horaf}`;

  const [value1, setValue1] = React.useState(format(new Date(), "yyyy-MM-dd"));
  console.log(value1);
  //const [value2, setValue2] = React.useState(tiempof);
  const [rows, setrows] = React.useState([]);
  const [open, setOpen] = React.useState(true);
  
  const handleToggle = () => {
    setOpen(!open);
  };


  const PostInforme = async () => {
    try {
      const host1 = "";
      const horas_tx = 0;
      let data5 =
        "fc_function=searchUltimoPunto&host=" +
        host1 +
        "&horas_tx=" +
        horas_tx +
        "&conmigas=S";
      const segunda = await axios.post("portal/data/procesos_up.php", data5);
      const objetos = segunda.data.map(({ id_objeto }) => id_objeto);
      console.log(objetos.toString());
      const host = objetos.toString();
      const porplaca = "N";
      const fechai = `${value1} ${horai}`;
      const fechaf = `${value1} ${horaf}`;
      const id_grupoClte = "";
      const datos =
        "fc_function=searchTiempoActividadFlota&host=" +
        host +
        "&porplaca=" +
        porplaca +
        "&fechai=" +
        fechai +
        "&fechaf=" +
        fechaf +
        "&id_grupoClte=" +
        id_grupoClte;
      const info = await axios.post(
        "portal/data/TiempoActividadFlota.php",
        datos
      );
      const ret = info.data.datos;
      setrows(ret);
      //console.log(rows);
    } catch (err) {
      console.log("error", err);
    }
  };
  React.useEffect(() => {
    PostInforme();
    console.log(`${value1} ${horai}`);
    
  }, []);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <MobileDatePicker
            label="FECHA"
            value={value1}
            onChange={(newValue) => {
              setValue1(format(newValue, "yyyy-MM-dd")+" ");
            }}
            renderInput={(params) => <TextField {...params} />}
            onAccept={() => {
              PostInforme();
            }}
          />
        </Stack>
      </LocalizationProvider>
      <div>
        
        <>
      {rows.length > 0 ? (
        <div>
         <TAF rows={rows} />
          
        </div>
      ) : (
        <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
          >
            <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>



      </div>
    </>
  );
}
