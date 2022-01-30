/*global google*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import {GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import {
  Marker,
  InfoWindow,
  OverlayView,
  Polyline,
} from "@react-google-maps/api";

function Trayectos() {
  
  const [puntos, setpuntos] = useState([]);
  const PeticionTrayectos = async () => {
    try {
      let host = "130754";
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
let latitud=Number(coors.latitud);
 let longitud=Number(coors.longitud);
        return {lat: latitud, lng: longitud}
            
            
      });
      setpuntos(cordenadas.slice(0,-1));
      //console.log(puntos)
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    PeticionTrayectos();
    console.log(puntos)
  }, []);

  /**/
  //////////////////////////

  const mapContainerStyle = {
    width: "auto",
    height: "800px",
  };

  const center = {
    lat: 18.50012,
    lng: -69.98857,
  };

  const onLoad = (polyline) => {
    console.log("polyline: ", polyline);
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
    libraries: ["drawing"]
  });

  

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
          
          path:  google.maps.SymbolPath.BACKWARD_CLOSED_ARROW
        },
        repeat: "120px"
      }
    ]
  };

  return isLoaded ? (
    <>
      <GoogleMap
      //onLoad={onLoad2}
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={18}
        defaultOptions={{
          streetViewControl: false,
          fullscreenControl: false,
          mapTypeControl: false,
          zoomControl: false,
        }}
      >
        <Polyline onLoad={onLoad} path={puntos} options={options} />
      </GoogleMap>
    </>
  ) : (
    <></>
  );
}

export default Trayectos;
