// Include the Main React Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './components/sidebar';
import LineupPanel from './components/lineupPanel';
// Grabs the Routes
//var routes = require("./config/routes");

// Renders the contents according to the route page.
ReactDOM.render(
  <Sidebar />,
  document.getElementById('app')
);

ReactDOM.render(
  <LineupPanel />,
  document.getElementById('lineup')
);
