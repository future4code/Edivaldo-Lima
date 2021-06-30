import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from './Paginas/Home/Home'
import ListTrips from './Paginas/ListTrips/ListTrips'
import ApplicationForm from './Paginas/ApplicationForm/ApplicationForm'
import Login from './Paginas/Login/Login'
import AdminHome from './Paginas/AdminHome/AdminHome'
import CreateTrip from './Paginas/CreateTrip/CreateTrip'
import TripDetails from './Paginas/TripDetails/TripDetails'

function App() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <Home/>
          </Route>
          <Route exact path={"/ListTrip"}>
            <ListTrips/>
          </Route>
          <Route exact path={"/ApplicationForm"}>
            <ApplicationForm/>
          </Route>
          <Route exact path={"/Login"}>
            <Login/>
          </Route>
          <Route exact path={"/AdminHome"}>
            <AdminHome/>  
          </Route>
          <Route exact path={"/CreateTrip"}>
            <CreateTrip/>
          </Route>
          <Route exact path={"/TripDatails"}>
            <TripDetails/>
          </Route>

        </Switch>
      </BrowserRouter>
    );
  }
  
  export default App;


