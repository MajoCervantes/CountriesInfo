import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"

//Componentes
import Home from "./Views/Home.jsx";
import CityInfo from "./Views/CityInfo.jsx";
import NotFound from "./Views/NotFound.jsx";
import WeatherInfo from "./Views/WeatherInfo.jsx";

const App =() => {
  return (
       <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/city/:name" exact>
          <CityInfo />
        </Route>

        <Route path="/weather/:capital" exact>
          <WeatherInfo />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>        

      </Switch>
    </BrowserRouter>

  );
}

export default App;
