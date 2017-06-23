import React from 'react';

var dash = {
  icons: {
    width: "32px",
    height: "32px",
    marginRight: "10px",
    fill: "white"
  },
  listItems: {
    backgroundColor: "#34495E",
    fontSize: "16px",
    border: "2px solid white",
      a: {
        color: "#BBCCDB"
      }
  }
};

class Dashboard extends React.Component {
  constructor(props){
    super(props)
        this.state = {
            lists: [
                {text: "Dashboard", img: "images/dashboard.png", id: 1},
                {text: "Lineup", img: "images/lineup.png", id: 2},
                {text: "Forms", img: "images/forms.png", id: 3},
                {text: "Bulletin", img: "images/bulletin.png", id: 4},
                {text: "Court Dates", img: "images/court_dates.png", id: 5}
              ]
        }
      }
        render () {
          const createListItem = (element) => {
            return <List img={element.img} text={element.text} key={element.id} />;
          };
          return (
            <div>
              {this.state.lists.map(createListItem)}
            </div>
          )
        }
};

//Stateless List Items
const List = (props) => {
  return (
<span style={dash.listItems} className="list-group-item">
        <img style={dash.icons} src={props.img}/>
      <a style={dash.listItems.a} href="#">{props.text}

      </a>
</span>
  )
};

export default Dashboard;
