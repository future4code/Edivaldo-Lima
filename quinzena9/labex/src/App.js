import React from 'react'
import './Paginas/Home/Home'
import Home from './Paginas/Home/Home'
import ListTrips from './Paginas/ListTrips/ListTrips'
import { Global } from './styledApp'


function App() {
  return (
    <Global>
      
      <ListTrips/>
    </Global>
  );
}

export default App;
