/** In this file, we create a React component which incorporates components provided by material-ui */

var 
  React = require('react'),
  Chart = require('chart.js'),
  BarChart = require('react-chartjs').Bar,
  mui = require('material-ui'),
  RaisedButton = mui.RaisedButton,
  Toolbar = mui.Toolbar,
  ToolbarGroup = mui.ToolbarGroup,
  Icon = mui.Icon, 
  Paper = mui.Paper,
  LeftNav = mui.LeftNav
  ;

var menuItems = [
  { route: 'settings', text: "Settings"},
  { route: 'logout', text: "Logout"}
];

var Main = React.createClass({

  render: function() {
  
    return (
      <div className="charged-timeline-page">
        <Toolbar>
          <ToolbarGroup key={0} float="left" innerClassName="header">
            <Icon icon="action-list" onTouchTap={this._showleftNav} />
          </ToolbarGroup>
          <ToolbarGroup key={1} float="right" innerClassName="header">
            <span className="mui-font-style-headline title">Charged!</span>
            <Icon icon="action-favorite" className="tnm" />
          </ToolbarGroup>
        </Toolbar>
        <LeftNav docked={false} menuItems={menuItems}/>
        <Timeline data={this.props.data} />
       </div>
    );
  },
  
  _showleftNav: function() {
    console.log("boo");
    LeftNav.docked = true;
  }
});

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
      <div class="timeline">
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

module.exports = Main;