import React from 'react';

const styles = {
  logo: {
    height: "70px",
    widht: "70px"
  }
};

class ImagesPanel extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="container">
        <img style={styles.logo} src="public/images/Orlando-Police-Dept.png"/>
      </div>
    )
  }
};

export default ImagesPanel;
