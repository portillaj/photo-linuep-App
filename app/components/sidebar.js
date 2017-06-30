import React from 'react';
import Dashboard from './dashboard_list';
import Software from './software_list';

const styles = {
  sidebar: {
    backgroundColor: "#34495E",
    height: "760px"
  },
  mainPanel: {
    height: "760px",
    backgroundColor: "#A09F9F"
  },
  logo: {
    height: "99px",
    width: "99px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "30px",
    marginTop: "150px"
  },
  dashHeader: {
    color: "white",
    marginBottom: "-20px"
  }
};

class Sidebar extends React.Component {
  render() {
    return (
  <div style={styles.dashboard} className="container-fluid">
  	<div className="row">
  		<div style={styles.sidebar} className="col-sm-3 col-md-2">
        <img style={styles.logo} src="/../../public/Orlando-Police-Dept.png"/>
      <div className="mini-submenu">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
      </div>
        <div className="list-group">
          <Dashboard />
        </div>
      </div>
        <div style={styles.mainPanel} className="col-sm-9 col-md-10">
            <h2 style={styles.dashHeader}>OPD Dashboard Content Overview</h2>
            <Software />
        </div>
    </div>
  </div>
);
  }
};

export default Sidebar;
