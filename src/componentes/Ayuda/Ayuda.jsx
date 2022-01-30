import React from "react";
import Typography from "@mui/material/Typography";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import HexagonIcon from "@mui/icons-material/Hexagon";
import { red } from "@mui/material/colors";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import NearMeIcon from "@mui/icons-material/NearMe";
import Divider from "@mui/material/Divider";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import FolderIcon from "@mui/icons-material/Folder";
import AddAlertIcon from "@mui/icons-material/AddAlert";
function Ayuda() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <>
      <div>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Instalar Web App
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              <Divider>Pasos Para Instalacion.</Divider>
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Instalar la aplicación nos permite obtener un acceso directo a la
              plataforma sin tener que abrir cada vez un navegador. La
              instalación está soportada tanto para móviles, tablets, como en
              ordenadores, sin necesidad de pasar por los marketplaces
              propietarios como Google Play en Android, App Store en iOS, etc. y
              no ocupará espacio del dispositivo.
              <br />
              <Typography variant="h6" gutterBottom component="div">
                iPHONE(IOS)
              </Typography>
              
                Por favor busca una opción dentro del menú que ponga Añadir a
                pantalla de inicio. Alternativamente, en algún navegador se
                puede instalar directamente a través de un botón que está en la
                barra de direcciones. Si no aparece ninguna de esas opciones
                puede significar que tu dispositivo no está soportado, o que tal
                vez tu navegador adopte una política distinta respecto a la
                instalación. Contáctanos para más información.
              
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Leyenda
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>Iconos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography variant="button" display="block" gutterBottom>
                Estados.
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                <LocalParkingIcon color="primary" sx={{ fontSize: 30 }} />
                <HexagonIcon sx={{ fontSize: 30, color: red[500] }} />
                <NearMeIcon color="success" sx={{ fontSize: 30 }} />
                <ArrowCircleRightIcon color="success" sx={{ fontSize: 30 }} />
                <Typography variant="button" display="block" gutterBottom>
                  Modulos.
                </Typography>
                <LocationOnIcon sx={{ fontSize: 30 }} />
                <AddAlertIcon sx={{ fontSize: 30 }}  />
                <FolderIcon sx={{ fontSize: 30 }} />
              </Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Advanced settings
            </Typography>
            <Typography sx={{ color: "text.secondary" }}>
              Filtering has been entirely disabled for whole web server
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
              sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ width: "33%", flexShrink: 0 }}>
              Soporte.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Link Para Descargar APP en Play Store:
              <a href="https://play.google.com/store/apps/details?id=com.huntertrackgps">
                https://play.google.com/store/apps/details?id=com.huntertrackgps{" "}
              </a>
              Para soporte 809-334-2002 helpdesk@hunter.do
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

export default Ayuda;
