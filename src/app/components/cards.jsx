// node modules
var React = require('react'),
    mui = require('material-ui'),
    LocalStorageMixin = require('react-localstorage');

// material components
var 
    Icon = mui.Icon, 
    Paper = mui.Paper,
    TextField = mui.TextField,
    RaisedButton = mui.RaisedButton;

var Cards = React.createClass({
  mixins: [LocalStorageMixin],

  getInitialState: function() {
    return {cards:[]};
  },

  _deleteCard: function(id) {
    var s = this.state;
    var c = s.cards;
    var cards = this.state.cards.filter(function(i) { 
      console.log(i.id + " <> " + id);
      return (i.id !== id);
    });
    s.cards = cards;
    this.setState(s);
  },


  render: function() {
    var deleteHandler = this._deleteCard;
    var cards = this.state.cards.map(function(card) {
      return (
        <Card key={card.id} data={card} deleteHandler={deleteHandler} />
      );
    });
    return (
      <Paper ref="cards" zDepth={2} innerClassName="cards">
        <h5>Charge Tokens</h5>
        <table>
          {cards}
        </table>
        <TextField ref="card_id" hintText="NL-TNM-XXXXXX-X" floatingLabelText="Add a card" />
        <br/>
        <TextField className="up" ref="card_name" floatingLabelText="Friendly name"/>
        <br/>
        <div className="align-right">
          <RaisedButton label="add" primary={true} onTouchTap={this._handleAddTouchTap} />
        </div>
      </Paper>
    );
  },

  _handleAddTouchTap: function() {
    var s = this.state;
    s.cards.push(
      {id:this.refs.card_id.getValue(), name:this.refs.card_name.getValue()}
    );
    this.setState(s);
  }

});


var Card = React.createClass({

  render:function() {
    var card = this.props.data;
    return (
      <tr> 
        <td className="cards mui-font-style-body-1">{card.name}</td>
        <td className="cards mui-font-style-body-1">{card.id}</td>

        <td className="cards"><Icon id={card.id} icon="action-delete" onTouchTap={this._handleDeleteTouchTap.bind(this,card.id)} /></td>
      </tr>   
    );
  },

  _handleDeleteTouchTap: function(id,e) {
    this.props.deleteHandler(id);
  }

})


module.exports = Cards;