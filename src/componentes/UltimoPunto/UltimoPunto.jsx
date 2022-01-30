import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import axios from "axios";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Mapa from "../mapa/Mapa";
import Estado from "./Estado/Estado";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import ListItemIcon from "@mui/material/ListItemIcon";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import RouteIcon from "@mui/icons-material/Route";
import Divider from "@mui/material/Divider";
import BoltIcon from "@mui/icons-material/Bolt";
import ListItem from "@mui/material/ListItem";
const UltimoPunto = () => {
  const [up, setup] = React.useState([]);

  const sendpost = async () => {
    try {
      const host = "";
      const horas_tx = 0;
      let data5 =
        "fc_function=searchUltimoPunto&host=" +
        host +
        "&horas_tx=" +
        horas_tx +
        "&conmigas=S";
      const segunda = await axios.post("portal/data/procesos_up.php", data5);
      setup(segunda.data);
      console.log(up);
    } catch (err) {
      console.log("error", err);
    }
  };

  React.useEffect(() => {
    sendpost();
  }, []);
  //-69.98857 18.50012
  const [open, setOpen] = React.useState(false);
  const [longitud, setLongitud] = React.useState();
  const [latitud, setLatitud] = React.useState();
  const [codigo_objeto, setcodigo_objeto] = React.useState();
  const [id_objeto, setid_objeto] = React.useState(null);
  const handleClickOpen = (e) => {
    setOpen(true);
    setLongitud(Number(e.target.attributes.longitud.value));
    setLatitud(Number(e.target.attributes.latitud.value));
    setcodigo_objeto(e.target.attributes.codigo_objeto.value);
    setid_objeto(Number(e.target.attributes.id_objeto.value));
    //console.log(e.target.attributes.latitud.value);
    ///console.log(longitud);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handletrayecto = (e) => {
    setOpen(true);
    ///setid_objeto(Number(e.target.attributes.id_objeto.value));
  };
  const [open2, setOpen2] = React.useState(false);

  return (
    <>
      <Box sx={{ pb: 6 }}>
        <CssBaseline />
        <Paper square sx={{ pb: "12px" }}>
          {up.map(
            (
              {
                codigo_objeto,
                nombre_objeto,
                georeferencia,
                tiempo_sin_t,
                latitud,
                longitud,
                codobj_nomobj,
                velocidad,
                encendido,
                id_objeto,
                bateria_ppal,
              },
              index
            ) => (
              <List key={index}>
                <ListItem
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      id_objeto={id_objeto}
                    >
                      
                    </IconButton>
                  }
                  disablePadding
                >
                  <ListItemButton
                    /*
                  onClick={e=> setOpen2(
                    open2 === index ? null : index
                )}
                */
                    onClick={handleClickOpen}
                    longitud={longitud}
                    latitud={latitud}
                    codigo_objeto={codigo_objeto}
                    id_objeto={id_objeto}
                  >
                    <ListItemAvatar
                      longitud={longitud}
                      latitud={latitud}
                      codigo_objeto={codigo_objeto}
                      id_objeto={id_objeto}
                    >
                      <Avatar
                        alt="Profile Picture"
                        longitud={longitud}
                        latitud={latitud}
                        codigo_objeto={codigo_objeto}
                        id_objeto={id_objeto}
                        sx={{ mr: 4, mb: 2 }}
                      >
                        {" "}
                        <Estado
                          //velocidad={velocidad}
                          //sx={{ fontSize: 20 }}
                          longitud={longitud}
                          latitud={latitud}
                          codigo_objeto={codigo_objeto}
                          velocidad={velocidad}
                          encendido={encendido}
                          id_objeto={id_objeto}
                        />
                      </Avatar>
                      {tiempo_sin_t}
                    </ListItemAvatar>
                    <ListItemText
                      longitud={longitud}
                      latitud={latitud}
                      codigo_objeto={codigo_objeto}
                      id_objeto={id_objeto}
                      primary={
                        <Typography
                          sx={{ fontSize: 16 }}
                          longitud={longitud}
                          latitud={latitud}
                          codigo_objeto={codigo_objeto}
                          id_objeto={id_objeto}
                        >
                          {codigo_objeto}
                        </Typography>
                      }
                      secondary={
                        <React.Fragment>
                          <Typography
                            id_objeto={id_objeto}
                            longitud={longitud}
                            latitud={latitud}
                            codigo_objeto={codigo_objeto}
                            sx={{
                              display: "inline",
                              fontSize: 12,
                              fontWeight: "bold",
                            }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {nombre_objeto}
                            <br
                              id_objeto={id_objeto}
                              longitud={longitud}
                              latitud={latitud}
                              codigo_objeto={codigo_objeto}
                            />
                          </Typography>
                          <Typography
                          id_objeto={id_objeto}
                          longitud={longitud}
                          latitud={latitud}
                          codigo_objeto={codigo_objeto}
                          >
                            <BoltIcon
                              sx={{ fontSize: 14, color: '#D1D100' }}
                              id_objeto={id_objeto}
                              longitud={longitud}
                              latitud={latitud}
                              codigo_objeto={codigo_objeto}
                            />{" "}
                            {bateria_ppal}
                            {"V"}
                          </Typography>

                          <Link
                            sx={{ fontSize: 11 }}
                            underline="hover"
                            variant="body2"
                            longitud={longitud}
                            latitud={latitud}
                            codigo_objeto={codigo_objeto}
                            id_objeto={id_objeto}
                          >
                            {georeferencia}
                          </Link>
                        </React.Fragment>
                      }
                    />
                  </ListItemButton>
                </ListItem>
                <Divider variant="middle" />
              </List>
            )
          )}
        </Paper>
      </Box>
      <div>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          //TransitionComponent={Transition}
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Button color="inherit" onClick={handleClose}>
                Volver
              </Button>
            </Toolbar>
          </AppBar>
          <Mapa
            latitud={latitud}
            longitud={longitud}
            codigo_objeto={codigo_objeto}
            id_objeto={id_objeto}
          />
        </Dialog>
      </div>
    </>
  );
};
export default UltimoPunto;
