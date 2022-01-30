import React from "react";
import Login2 from "../componentes/Login2/Login2";
import UltimoPunto from "../componentes/UltimoPunto/UltimoPunto";
import Mapa from "../componentes/mapa/Mapa";
import Ayuda from "../componentes/Ayuda/Ayuda";
import Alertas from "../componentes/Alertas/Alertas"
import Informe from "../componentes/Informe/Informe"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Marco from "../ComponentePadre/Marco";
import Nav from "../ComponentePadre/Nav";
import Loader from "../ComponentePadre/Loader";
import Trayectos from "../componentes/Trayectos/Trayectos"
function Ruta() {
    return (
    <>
      <Router>
        <Route path="/" exact>
          <Login2 />
        </Route>

        <Route path="/up">
          <Nav name="Ultimo Punto" />
          <Loader time={2000}/>
          <UltimoPunto  />
          <Marco />
        </Route>

        <Route path="/mapa">
          <Nav name="Mapa" />
          <Mapa />
          <Marco />
        </Route>

        <Route path="/ayuda">
          <Nav name="Ayuda" />
          <Ayuda />
          <Marco />
        </Route>

        <Route path="/alertas">
          <Nav name="Alertas" />
          <Loader time={1500}/>
          <Alertas />
          <Marco />
        </Route>

        <Route path="/informe">
          <Nav name="Informe" />
          <Informe />
          <Marco />
        </Route>

        <Route path="/trayecto">
          <Nav name="Trayectos" />
          <Trayectos />
          <Marco />
        </Route>
        
      </Router>
    </>
  );
}

export default Ruta;
