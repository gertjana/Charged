(function () {
  var React = require('react'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    Settings = require('./components/cards.jsx'); // Our custom react component

  var data = {
  	cards: ["NL-TNM-123456-7","NL-TNM-123456-8","NL-TNM-123456-9"],
  	user: {
  		id: "1",
  		email: "g.assies@thenewmotion.com",
  		name: "Gertjan Assies"
  	}
  }

  //Needed for React Developer Tools
  window.React = React;

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  // Render the main app react component into the document body. 
  // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
  React.render(<Settings data={data} />, document.body);

})();