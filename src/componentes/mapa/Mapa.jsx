/*global google*/
import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import {
  Marker,
  InfoWindow,
  OverlayView,
  Polyline,
} from "@react-google-maps/api";
import { TrafficLayer } from "@react-google-maps/api";
import { color } from "@mui/system";
import { red } from "@mui/material/colors";
import axios from "axios";

import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import MobileDatePicker from "@mui/lab/MobileDatePicker";

import Stack from "@mui/material/Stack";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";



function ResponsiveDatePickers() {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={4}>
        <MobileDatePicker
          label="For mobile"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}

const options = {
  strokeColor: "#FF0000",
  strokeOpacity: 0.7,
  strokeWeight: 3,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
  radius: 30000,
  //paths: puntos,
  zIndex: 3,
  icons: [
    {
      icon: {
        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
      },
      repeat: "120px",
    },
  ],
};
const containerStyle = {
  width: "auto",
  height: "100%",
};
const onLoad = (marker) => {
  console.log("marker: ", marker);
};
function Mapa(props) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const MakerC = () => {
    return (
      <div>
        <Marker
          icon={{
            url: "https://huntertrack.com.do/huntertrack/portal/images/Carro_e.png",
            origin: new window.google.maps.Point(0, 0),
            //scale: 6,
            anchor: new window.google.maps.Point(20, 60),
            scaledSize: new window.google.maps.Size(70, 70),
            rotation: 40,
          }}
          open={open}
          //label={'hola'}
          animation={3}
          onLoad={onLoad}
          position={position}
          onClick={handleToggle}
          //title={"kkj"}
          zIndex={3}
          //opacity= {0.7}
        >
          {open && (
            <InfoWindow
              style={{ maxWidth: 120, top: 20 }}
              onCloseClick={handleClose}
              //onLoad={onLoad}
              position={position}
              //zIndex={2}
              //pixelOffset={"20"}
            >
              <div
                className="berlin"
                style={{
                  height: "100px",
                  width: "230px",
                  fontFamily: "Roboto",
                }}
              >
                <div style={{ height: "20px" }}>
                  <div style={{ float: "left", padding: "3px 0 0 6px" }}>
                    Placa:{" "}
                  </div>
                  <div
                    style={{ float: "left", padding: "3px", color: "#3497d9" }}
                  >
                    {props.codigo_objeto}
                  </div>
                </div>
                <div style={{ height: "20px", clear: "both" }}>
                  <div style={{ float: "left", padding: "3px 0 0 6px" }}>
                    Voltaje:{" "}
                  </div>
                  <div
                    style={{ float: "left", padding: "3px", color: "#3497d9" }}
                  >
                    {" "}
                    12.2
                  </div>
                  <div style={{ height: "20px", clear: "both" }}>
                    <div style={{ float: "left", padding: "3px 0 0 6px" }}>
                      Temperatura:{" "}
                    </div>
                    <div
                      style={{
                        backgroundColor: "blue",
                        float: "left",
                        padding: "3px",
                        color: "#3497d9",
                      }}
                    >
                      {" "}
                      0.00
                    </div>
                  </div>
                </div>
              </div>
            </InfoWindow>
          )}
        </Marker>
        <OverlayView
          position={position}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          getPixelPositionOffset={(width, height) => ({
            x: -(width / 2),
            y: -(height / 2),
          })}
        >
          <div style={{ height: "50px", width: "50px", fontSize: "20px" }}>
            <b style={{ color: "#FFFFFF", backgroundColor: "#DCDC00" }}>
              {props.codigo_objeto}
            </b>
          </div>
        </OverlayView>
      </div>
    );
  };

  const [puntos, setpuntos] = useState([]);
  const PeticionTrayectos = async () => {
    try {
      let host = props.id_objeto;
      let fechai = "2022-01-03 00:00:00";
      let fechaf = "2022-01-03 23:59:00";
      let tipozoom = 1;
      let timezoom = 0;
      let porplaca = "";
      let consHost = "";
      let eventos = "";

      let data5 =
        "host=" +
        host +
        "&fechai=" +
        fechai +
        "&fechaf=" +
        fechaf +
        "&tipozoom=" +
        tipozoom +
        "&timezoom=" +
        timezoom +
        "&porplaca=" +
        porplaca +
        "&consHost=" +
        consHost +
        "&eventos=" +
        eventos;
      const segunda = await axios.post(
        "portal/mapa/mapaPrincipal.php?fc_function=aplicarRecorrido",
        data5
      );

      const cordenadas = segunda.data.map((coors) => {
        let latitud = Number(coors.latitud);
        let longitud = Number(coors.longitud);
        return { lat: latitud, lng: longitud };
      });
      setpuntos(cordenadas.slice(0, -1));
      //console.log(puntos)
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    PeticionTrayectos();
    console.log(puntos);
  }, []);

  ///////

  //

  const position = {
    lat: props.latitud || 18.50012,
    lng: props.longitud || -69.98857,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCx-1mhWBfVlkEcbMCYqQdVZWrbudKi7O4",
  });
  const [map, setMap] = React.useState(null);
  /*
  const onLoad2 = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
*/

  
const [Trayecto, setTrayecto] = React.useState(false);
    const handleChange = (event) => {
      setTrayecto(event.target.checked);
    };
  console.log(Trayecto);
  return isLoaded ? (
    <>
      <ResponsiveDatePickers />
      <FormGroup>
        <FormControlLabel
          onChange={handleChange}
          control={<Switch size={"medium"} />}
          label="Trayecto"
        />
      </FormGroup>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={19}
        defaultOptions={{
          streetViewControl: false,
          fullscreenControl: false,
          mapTypeControl: false,
          zoomControl: false,
        }}
      >
        {Trayecto &&puntos ? (
          

          <Polyline onLoad={onLoad} path={puntos} options={options} />
          
        ) : (
          <MakerC />
        )}
      </GoogleMap>
    </>
  ) : (
    <></>
  );
}

export default React.memo(Mapa);
