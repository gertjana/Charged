var 
  React = require('react'),
  LocalStorageMixin = require('react-localstorage'),
  mui = require('material-ui'),
  RaisedButton = mui.RaisedButton,
  Paper = mui.Paper,
  TextField = mui.TextField,
  RaisedButton = mui.RaisedButton
  ;  

var User = React.createClass({

// TextField and LocalStorageMixin do not work together properly
// when enabling the mixin render gets called twice (one with the initial state and one time when the localstorage mixin updates the state)
// The TextField doesn't respond very well to this second call, (defaultValue is not updated correctly)
//  mixins: [LocalStorageMixin],

  getInitialState: function() {
    return {email:"g.assies@thenewmotion.com", password:"123456"};
  },

  render: function() {
    return (
      <Paper ref="user" zDepth={2} innerClassName="user">
        <h5>User Information</h5>
        <p>Login with your myTNM account</p>
        <br/>
        <TextField className="up" defaultValue={this.state.email} floatingLabelText="e-mail" onBlur={this._handleEmailChange} />
        <TextField type="password" className="up" defaultValue={this.state.password} floatingLabelText="password" onBlur={this._handlePasswordChange}/>
        <div className="align-right">
          <span>{this.state.accessToken}    </span>
          <RaisedButton label={ this.state.accessToken ? "Connected" : "Connect"} primary={true} onTouchTap={this._handleLogin}/>
        </div>
      </Paper>
    );
  },

  _handleEmailChange: function(e) {
    var s = this.state;
    s.email = e.target.value;
    this.setState(s);
    e.preventDefault();
  },

  _handlePasswordChange: function(e) {
    var s = this.state;
    s.password = e.target.value;
    this.setState(s);
    e.preventDefault();
  },

  //implement oAuth flow here
  _handleLogin: function(e) {
    var s = this.state;
    s.accessToken = "rV7tn9XQIObMOTBzHDPF9inEaZoP";
    this.setState(s)
    e.preventDefault();
  }
});

module.exports = User