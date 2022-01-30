import React, { useState } from "react";
import "./login.css";
import axios from "axios";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

//import UsuarioIncorrecto from "./UsuarioIncorrecto"
import FileDownloadIcon from "@mui/icons-material/FileDownload";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://huntertrack.com.do" target="_blank">
        Hunter Track
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Login2() {
  const [form, setState] = useState({
    username: "",
    password: "",
  });
/*
  React.useEffect(() => {
    localStorage.setItem("user", form.username);
  }, [form]);
*/
  const printValues = (e) => {
    e.preventDefault();
    
     let  headers= {
          'Content-Type':  'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    
    console.log(form.username, form.password);
    var data = `fc_function=validacionUsuario&usuario=${form.username}&password=${form.password}`;
    var config = {
      method: "post",
      url: "/portal/data/Login.php",
      data: data,
      //////headers: {'Origin': 'https://huntertrack.com.do/'}
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.data[0].status===true) {
          console.log(response.data[0].status===true)
          window.location = "up";
        } else {
          alert("Usuario no registrado.")
        }
      })
      .catch((error) => console.log("error", error));
  };

  const updateField = (e) => {
    e.preventDefault();
    setState({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div >
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs" className="content-center">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{ width: 56, height: 56 }}
                alt="Hrofile Picture"
                src=""
              ></Avatar>

              <Typography component="h1" variant="h3">
                Hunter Track
              </Typography>
              <Box
              
                component="form"
                noValidate
                onSubmit={printValues}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                    required= {true}
                      fullWidth
                      id="username"
                      label="Usuario"
                      name="username"
                      //autoComplete="text"
                      value={form.username}
                      onChange={updateField}
                      
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                    required= {true}
                      fullWidth
                      name="password"
                      label="Contraseña"
                      type="password"
                      id="password"
                      //autoComplete="new-password"
                      value={form.password}
                      onChange={updateField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="Recordar mi cuenta"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, p: 2, fontSize:15 }}
                  
                >
                  Iniciar Sesion
                </Button>
              </Box>
              <div sx={{ pb: 7 }}>
        <Box sx={{ width: "100%", maxWidth: 500, }}> 
      <Button
        variant="contained"
        //href="#contained-buttons"
        endIcon={<FileDownloadIcon />}
      >
        INSATALAR
      </Button>
        </Box>
      </div>
            </Box>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </ThemeProvider>
      </div>
      
    </>
  );
}
