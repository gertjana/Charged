
// node modules
var React = require('react'),
    mui = require('material-ui'),
    LocalStorageMixin = require('react-localstorage');

// custom components 
var User = require('./user.jsx'),
    Timeline = require('./timeline.jsx');
    Cards = require('./cards.jsx');

// material components
var Toolbar = mui.Toolbar,
    ToolbarGroup = mui.ToolbarGroup,
    Icon = mui.Icon, 
    Paper = mui.Paper;

var Main = React.createClass({
  mixins: [LocalStorageMixin],
  
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
              ? <Settings /> 
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



var Settings = React.createClass({
  render: function() {
   return (
      <div>
        <User />
        <Cards />
        <About />
      </div>
    )
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