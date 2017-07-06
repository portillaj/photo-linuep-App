import React from 'react';

const styles = {
  box: {
    width: "150px",
    height: "150px",
    border: "3px solid white",
    margin: "0 auto"
  },
  topSet: {
    marginTop: "100px",
    marginBottom: "50px"
  },
  imageHeader: {
    textAlign: "center",
    color: "white"
  },
  numberCenter: {
    textAlign: "center",
    color: "white",
    fontWeight: "200",
    fontSize: "19px",
    color: "#345C7F"
  }
};

class ImagesPanel extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <h1 style={styles.imageHeader}>Photo Lineup</h1>
        <Boxes />
      </div>
    )
  }
};

const Boxes = (props) => {
  return (
      <div>
        <div className="container-fluid">
          <div style={styles.topSet} className="row">
            <div className="col-md-4 col-lg-4">
              <div className="box1" style={styles.box}>

              </div>
                <h3 style={styles.numberCenter}>1</h3>
            </div>

              <div className="col-md-4 col-lg-4">
                <div className="box2" style={styles.box}>

                </div>
                  <h3 style={styles.numberCenter}>2</h3>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="box3" style={styles.box}>

                </div>
                  <h3 style={styles.numberCenter}>3</h3>
              </div>
          </div>

          <br />
          <br />
          <div className="row">
            <div className="col-md-4 col-lg-4">

              <div className="box4" style={styles.box}>

              </div>
                <h3 style={styles.numberCenter}>4</h3>
            </div>

            <div className="col-md-4 col-lg-4">
              <div className="box5" style={styles.box}>

              </div>
                <h3 style={styles.numberCenter}>5</h3>
            </div>

            <div className="col-md-4 col-lg-4">

              <div className="box6" style={styles.box}>

              </div>
              <h3 style={styles.numberCenter}>6</h3>
            </div>

            </div>
        </div>

      </div>
  )
};

export default ImagesPanel;
