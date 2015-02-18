// node modules
var React = require('react'),
    Chart = require('chart.js'),
    reactChart = require('react-chartjs'),
    mui = require('material-ui')
    ;

// material components
var 
    Icon = mui.Icon, 
    Paper = mui.Paper,
    BarChart = reactChart.Bar
    ;

var Timeline = React.createClass({

  render: function() {
    var timeLineNodes = this.props.data.map(function (tlItem) {
      var item = ""
      switch(tlItem.itemtype) {
        case "session": 
          item = <SessionItem key={tlItem.id} data={tlItem} />
          break;
        case "weekly":
          item = <WeeklyItem key={tlItem.id} data={tlItem} />
          break;
        case "badge":
          item = <BadgeItem key={tlItem.id} data={tlItem} />
          break;
      }
      return (
        item
      );
    });
  
    return (
      <div className="timeline">
        {timeLineNodes}
      </div>
    );
  }
});

var SessionItem= React.createClass({

  render: function() {
    var item = this.props.data
  
    return (
      <Paper zDepth={2} innerClassName="paper">
        <Icon icon={item.icon} innerClassName="papericon" />
        <h6>{item.title}</h6>
        <i>{item.date}</i>
        <p> {item.kWh} kWh charged and {item.CO2} kg CO2 saved </p>
      </Paper>
    );
  }
});



var WeeklyBarChart = React.createClass({

  render: function() {
    var chartData = this.props.data
    var chartOptions = {}
  
    return 
  }
});

var WeeklyItem= React.createClass({

  render: function() {
    var item = this.props.data
  
    return (
      <Paper zDepth={2} innerClassName="paper">
        <Icon icon={item.icon} innerClassName="papericon" />
        <h6>{item.title}</h6>
        <i>in {item.week}</i>
        <p>
          <BarChart data={item.data} options={{}} width="300" height="100" />
        </p>
      </Paper>
    );
  }
});

var BadgeItem= React.createClass({
  
  render: function() {
    var item = this.props.data
  
    return (
      <Paper zDepth={2} innerClassName="paper">
        <Icon icon={item.icon} innerClassName="papericon" />
        <h6>{item.title}</h6>
        <div>
          <div className="left">{item.description}</div>
          <div className="right"><img src={item.picture} /></div>
        </div>
        <br className="break" />
      </Paper>
    );
  }
 
});

module.exports = Timeline;