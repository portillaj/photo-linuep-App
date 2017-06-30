import React from 'react';

const styles = {
  formPanel: {
    backgroundColor: "#18324C",
    height: "760px",
    position: "relative",
  },
  imagePanel: {
    backgroundColor: "#2B2524",
    height: "760px"
  },
  formHeader: {
    color: "white",
    marginBottom: "35px",
    marginTop: "30px",
    textAlign: "center"
  },
  formContainer: {
    textAlign: "center",
    marginTop: "80px",
    backgroundColor: "#E5E5E5",
    borderRadius: "5px",
    padding: "20px",
    height: "300px"
  },
  leftSide: {
    marginRight: "55px"
  },
    label: {
    color: "#2F539E",
    left: "100px",
    padding: "3px",
    marginBottom: "1px",
    float: "left"
  },
  formBtn: {
    marginTop: "25px",
    marginRight: "40px"
  },
};

class Input extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return(
    <div>

    <h2 style={styles.formHeader}>Photo Lineup Form</h2>
      <form style={styles.formContainer} className="form-inline">
      <div style={styles.leftSide} className="form-group">
        <label style={styles.label}>Email address</label>
        <br/>
        <input type="text" className="form-control" id="caseNumber"/>
      </div>

      <div className="form-group">
        <label style={styles.label}>Lineup Number</label>
        <br/>
        <input type="text" className="form-control" id="lineupNumber"/>
      </div>
        <br/>

      <div style={styles.leftSide} className="form-group">
        <label style={styles.label}>Date</label>
        <br/>
        <input type="text" className="form-control" id="date"/>
      </div>

      <div className="form-group">
        <label style={styles.label}>Crime</label>
        <br/>
        <input type="text" className="form-control" id="crime"/>
      </div>

      <br/>
      <div style={styles.leftSide} className="form-group">
        <label style={styles.label}>Location</label>
        <br/>
        <input type="text" className="form-control" id="location"/>
      </div>

      <div className="form-group">
        <label style={styles.label}>Time</label>
        <br/>
        <input type="text" className="form-control myInput" id="time"/>
      </div>

      <br/>
      <a data-target="#myModal" data-toggle="modal">
        <button style={styles.formBtn} type="file" className="btn btn-primary">Upload</button>
      </a>
        <button style={styles.formBtn} type="submit" className="btn btn-success">Populate</button>
        <button style={styles.formBtn} type="submit" className="btn btn-warning">Save</button>
    </form>

    <div tabIndex="-1" className="modal fade" id="myModal" role="dialog" aria-hidden="true" aria-labelledby="myModalLabel">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button className="close" aria-hidden="true" type="button" data-dismiss="modal">×</button>
          </div>
          <div className="modal-body">
             <form action="/upload" method="POST" encType="multipart/form-data">
                <input type="file" name="photos" multiple/>
                </form>
                <div className="modal-footer">
                   <button className="btn btn-default" type="button" data-dismiss="modal">Close</button>
                   <input type="submit" className="btn btn-primary" data-dismiss="modal" />
                 </div>

          </div>
    </div>
  </div>
</div>
</div>
  );
}
};

module.exports = Input;
