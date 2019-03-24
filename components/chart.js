import React from "react";
import Close from "../img/close.png"

var Chart = require("chart.js");

class Layout extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    let prop = this.props.data;
    let female = prop.filter((gender) => gender.gender === "female").length;
    let femaleProcent = (female/prop.length * 100).toFixed(1);
    let maleProcent = (100 - femaleProcent).toFixed(1);

    const node = this.node;

    new Chart(node, {
        type: 'pie',
        data: {
          datasets: [{
              data: [femaleProcent, maleProcent],
              backgroundColor: ['#414146', '#7db7ed']
            }],
            labels: [
              "Female " + femaleProcent + " %",
              "Male " + maleProcent + " %"
            ]
          },
          options: {
            legend: {
              position: 'top',
              labels: {
                fontSize: 26
              }
            },
            responsive: true,
            animation: {
              animateScale: true,
              animateRotate: true
            },
            tooltips: {enabled: false}
          }
        });
  }

  render() {
    return (
      <div id="diagram">
        <canvas id="myChart"
          style={{ width: 800, height: 300}}
          ref={node => (this.node = node)}
        />
        <div className="close" onClick = {this.props.hideChart}><img src={Close} alt="none"></img></div>
      </div>
    );
  }
}

export default Layout;