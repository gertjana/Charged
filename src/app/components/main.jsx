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
  TextField = mui.TextField,
  RaisedButton = mui.RaisedButton
  ;

var Main = React.createClass({
  getInitialState: function() {
        return { showSettings: false };
  },
  render: function() {
  
    return (
      <div className="charged-timeline-page">
        <Toolbar>
          <ToolbarGroup key={0} float="left" innerClassName="header">
            <Icon icon="action-schedule" onTouchTap={this._handleTimeLineTouchTap} />
            <Icon icon="action-settings" onTouchTap={this._handleSettingsTouchTap} />
          </ToolbarGroup>
          <ToolbarGroup key={1} float="right" innerClassName="header">
            <span className="mui-font-style-headline title">Charged!</span>
          </ToolbarGroup>
        </Toolbar>
        { this.state.showSettings 
              ? <Settings data={this.props.userData} /> 
              : <Timeline data={this.props.data} /> 
        }
       </div>
    );
  },  
  _handleTimeLineTouchTap: function(e) {
    this.setState({showSettings:false});
    e.preventDefault();
  },
  _handleSettingsTouchTap: function(e) {
    this.setState({showSettings:true});
    e.preventDefault();
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


var Settings = React.createClass({
  render: function() {
   return (
      <div>
        <User data={this.props.data} />
        <Cards data={this.props.data} />
        <About />
      </div>
    )
  }
});

var User = React.createClass({
  render: function() {
    var user = this.props.data.user;
    return (
      <Paper zDepth={2} innerClassName="user">
        <h5>User Information</h5>
        <TextField className="up" hintText="name" defaultValue={user.name}
                   floatingLabelText="name" />
        <br/>
        <TextField className="up" hintText="e-mail" defaultValue={user.email}
                   floatingLabelText="e-mail" />
        <div className="align-right">
          <RaisedButton label="Connect" primary={true} />
        </div>
      </Paper>
    );
  }
});

var Cards = React.createClass({
  render: function() {
    var cards = this.props.data.cards.map(function(card) {
      return (
        <tr key={card}>
          <td className="cards mui-font-style-body-1">{card}</td>
          <td className="cards"><Icon icon="action-delete" /></td>
        </tr>
        );
    });
    return (
      <Paper zDepth={2} innerClassName="cards">
        <h5>Charge Tokens</h5>
        <table>
          {cards}
          <tr>
            <td><TextField hintText="add a card"/></td>
            <td className="add"><Icon icon="content-add-box" /></td>
          </tr>
        </table>
      </Paper>
    );
  }
});


var About = React.createClass({
  render: function() {
    return (
      <Paper zDepth={2} innerClassName="about">
        <h5>About</h5>
        <p>Charged! is setup as an experiment, an so called MVP (miminal viable product) and provided free of charge.<br/>If there is enough interest, development will continue.</p>
        <p>For more information you can have a look at <a href="https://github.com/gertjana/Charged">Charged @ Github</a>.</p>
        <p>Share positive Energy!</p>
      </Paper>
    );
  }
});


module.exports = Main;