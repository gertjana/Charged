/** In this file, we create a React component which incorporates components provided by material-ui */

var React = require('react'),
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
          <ToolbarGroup key={0} float="left">
            <Icon icon="action-list" onTouchTap={this._showleftNav} />
          </ToolbarGroup>
          <ToolbarGroup key={1} float="right">
            <span className="mui-font-style-headline lightgrey">Charged!</span>
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
          item = <SessionItem data={tlItem} />
          break;
        case "weekly":
          item = <WeeklyItem data={tlItem} />
          break;
        case "badge":
          item = <BadgeItem data={tlItem} />
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

var WeeklyItem= React.createClass({

  render: function() {
    var item = this.props.data
    return (
      <Paper zDepth={2} innerClassName="paper">
        <Icon icon={item.icon} innerClassName="papericon" />
        <h6>{item.title}</h6>
        <i>in {item.week}</i>
        <p> {item.kWh} kWh charged and {item.CO2} kg CO2 saved </p>
        <img src={item.chart} />
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
        <p>{item.description}
          <img src={item.picture} /> 
        </p>
      </Paper>
    );
  }
 
});

module.exports = Main;