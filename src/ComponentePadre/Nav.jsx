import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

export default function NavBar(props) {
  return (
    <Box
      sx={{ flexGrow: 1, position: "static", left: 0, right: 0, marginTop: 7 }}
    >
      <AppBar >
        <Toolbar >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.name}
          </Typography>
            <Button component={Link} to="/" color="inherit" >
            {<LogoutIcon />}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
