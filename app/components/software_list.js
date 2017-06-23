import React from 'react';

const text = "Metropolis-Regular";

//css objects
const appStyles = {
  appItem: {
    minwWidth: "200px",
    minHeight: "200px",
    display: "relative",
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: text
  },
  appGroup: {
    marginTop: "100px",
    fontFamily: text
  },
  appInfo: {
    height: "155px",
    width: "24px",
    backgroundColor: "#526F8C"
  },
  appInfoText: {
    textAlign: "center",
    color: "#ffffff",
    marginTop: "120px",
    backgroundColor: "#5F5F5F",
    padding: "5px"
  },
  appName: {
    color: "white",
    paddingTop: "80px",
    textAlign: "center"
  },
  appIconContainer: {
    display: "inline-block",
    position: "absolute",
    top: "-30px",
    left: "35%",
    backgroundColor: "#3D3C3C",
    border: "3px solid #FFFFFF",
    borderRadius: "50px",
    width: "90px",
    height: "90px",
  },
  appIcon: {
    height: "53px",
    width: "53px",
    margin: "15px"
  }
};

//start of component
class Software extends React.Component{
  constructor(props){
    super(props)

    //objects of apps in the dashboard main panel
    this.state = {
      appList: [
          {text: "Lineup", background: "#34495E", img: "images/lineup.png", id: 1},
          {text: "Forms", background: "#E74C3C", img: "images/forms.png", id: 2},
          {text: "Bulletin", background: "#8E44AD", img: "images/bulletin.png", id: 3},
          {text: "Court Dates", background: "#2980B9", img: "images/court_dates.png", id: 4},
          {text: "Workday", background: "#F39C12", img: "images/workday.png", id: 5},
          {text: "Kronos", background: "#16A085", img: "images/kronos.png", id: 6},
          {text: "D.A.V.I.D", background: "#0E90DF", img: "images/david.png", id: 7},
          {text: "Google Maps", background: "#BC325F", img: "images/google.png", id: 8}
        ]
    }

  } //end constructor

  //start of render function
  render() {
    const createAppItem = (element) => {
      return <Apps background={element.background} backgroundInfo={element.backgroundInfo} img={element.img} text={element.text} key={element.id} />;
    };

    return (
        <div>
              {this.state.appList.map(createAppItem)}

        </div>
    )
  }
};

//stateless function for app container
const Apps = (props) => {
    return (
        <div style={appStyles.appGroup} className="col-sm-3 col-md-3">
          <div style={appStyles.appIconContainer}>
            <img src={props.img} style={appStyles.appIcon}/>
          </div>

          <div style={{backgroundColor: props.background, height: "250px", borderRadius: "4px", marginBottom: "-50px"}}>
              <h3 style={appStyles.appName}>{props.text}</h3>
              <Info />
        </div>
      </div>
    )
};

//stateless function for info banner at bottom of Apps
const Info = (props) => {
  return (
      <div>
        <h4 style={appStyles.appInfoText}>Info</h4>
      </div>
  )
};

//exporting Software component
export default Software;
