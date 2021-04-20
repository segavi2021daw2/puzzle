import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Ayuda} from "./Ayuda";
import {M09_Sqlite} from "./sqlite";
import {Timer} from "./timer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
 

 
    <Router>
      <div >
        <nav>
          <ul>
            <li>
              <Link id="buttons1" to="/">Ir al juego</Link>
            </li>
            <li>
              <Link  id="buttons2" to="/Ayudaa">Ayuda</Link>
            </li>
            <li>
              <Link  id="buttons3" to="/Puntuaciones">Puntuaciones</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Ayudaa">
            <Ayuda />
          </Route>
          <Route path="/Puntuaciones">
            <Puntuaciones />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </React.StrictMode>,
  document.getElementById("root")
  );
 

function Home() {
  return <App></App>;
  
}

function Ayudaa() {
  return <Ayuda></Ayuda>;
}

function Puntuaciones() {
  return <M09_Sqlite></M09_Sqlite>;
}


