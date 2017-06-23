import React from 'react';
import Form from './form';
import Images from './ImagesPanel';

const styles = {
  formPanel: {
    backgroundColor: "#18324C",
    height: "760px"
  },
  imagePanel: {
    backgroundColor: "#2B2524",
    height: "760px"
  },
  lineupContainer: {
    marginLeft: "220px"
  }
};

class LineupPanel extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="container-fluid">
        <div style={styles.lineupContainer} className="row">
          <div style={styles.formPanel} className="col-sm-6 col-md-5">
          <div className="mini-submenu">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
          </div>
            <div className="list-group">
              <Form />
            </div>
          </div>
            <div style={styles.imagePanel} className="col-sm-6 col-md-7">
              <Images />
            </div>
        </div>
      </div>
    )
  }
};

export default LineupPanel;
