
var 
  React = require('react'),
  mui = require('material-ui'),
  Toolbar = mui.Toolbar,
  ToolbarGroup = mui.ToolbarGroup,
  Icon = mui.Icon, 
  Paper = mui.Paper,
  LeftNav = mui.LeftNav,
  TextField = mui.TextField,
  FlatButton = mui.FlatButton,
  RaisedButton = mui.RaisedButton,
  MenuItem = mui.MenuItem
  ;


var menuItems = [
  { 
     type: MenuItem.Types.LINK, 
     payload: '/index.html', 
     text: 'Timeline' 
  },
  { 
     type: MenuItem.Types.LINK, 
     payload: '/settings.html', 
     text: 'Settings' 
  }
];

var Settings = React.createClass({
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
        <LeftNav ref='leftNav' docked={false} menuItems={menuItems} />
        <User data={this.props.data}/>
        <Cards data={this.props.data}/>
       </div>
    );
  },
  
  _showleftNav: function() {
    this.refs.leftNav.toggle();
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
})




module.exports = Settings;