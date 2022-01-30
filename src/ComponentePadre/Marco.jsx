import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FolderIcon from "@mui/icons-material/Folder";
import AddAlertIcon from "@mui/icons-material/AddAlert";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import RouteIcon from '@mui/icons-material/Route';
import { Link } from "react-router-dom";

function Marco() {
  return (
    <div className="menu">
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, overflow: 'hidden' }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BottomNavigationAction
            label="Ubicacion"
            icon={<LocationOnIcon sx={{ fontSize: 30 }} />}
            component={Link}
            to="/up"
          />
                    
          <BottomNavigationAction
            label="Alertas"
            icon={<AddAlertIcon sx={{ fontSize: 30 }}  />}
            component={Link}
            to="/alertas"
          />
          <BottomNavigationAction
            label="Informes"
            icon={<FolderIcon sx={{ fontSize: 30 }} />}
            component={Link}
            to="/informe"
          />
          <BottomNavigationAction
            label="Ayuda"
            icon={<HelpCenterIcon sx={{ fontSize: 30 }} />}
            component={Link}
            to="/ayuda"
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default Marco;
