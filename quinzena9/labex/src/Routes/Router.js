import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from '../Paginas/Home/Home'
import ListTrips from '../Paginas/ListTrips/ListTrips'
import ApplicationForm from '../Paginas/ApplicationForm/ApplicationForm'
import Login from '../Paginas/Login/Login'
import AdminHome from '../Paginas/AdminHome/AdminHome'
import CreateTrip from '../Paginas/CreateTrip/CreateTrip'
import TripDetails from '../Paginas/TripDetails/TripDetails'

export default function Router() {
    return (

      <BrowserRouter>
        <Switch>
          
          <Route exact path="/" component={Home}/>
           
          <Route exact path="/trips/list" component={ListTrips}/>
            
          <Route exact path="/trips/application" component={ApplicationForm}/>
            
          <Route exact path="/login" component={Login}/>
            
          <Route exact path="/admin" component={AdminHome}/>
            
          <Route exact path="/admin/trips/create" component={CreateTrip}/>
            
          <Route exact path="/admin/trips/:id" component={TripDetails}/>
            
        </Switch>
      </BrowserRouter>
    );
  }
  
