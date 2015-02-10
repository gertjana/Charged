(function () {
  var React = require('react'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    Main = require('./components/main.jsx'); // Our custom react component


var data = [
  {"itemtype":"badge",   "icon":"action-bookmark",   "title":"Improvement", "picture":"", "description":"You charged more today than yesterday, keep up the good work"},
  {"itemtype":"session", "icon":"action-assessment", "title":"Charged Daily", "date":"05-02-2015", "kWh":20, "CO2":45},
  {"itemtype":"session", "icon":"action-assessment", "title":"Charged Daily", "date":"05-02-2015", "kWh":13, "CO2":34},
  {"itemtype":"badge",   "icon":"action-bookmark",   "title":"Drove around the world", "picture":"/www/images/globe.png", "description":"Congratulations, you charged enough kWh to drive around the world!"},
  {"itemtype":"session", "icon":"action-assessment", "title":"Charged Daily", "date":"05-02-2015", "kWh":16, "CO2":37},
  {"itemtype":"weekly",  "icon":"action-assessment", "title":"Charged Weekly", "week":"2015 12", kWh:234, "CO2":345, "chart":"www/images/chart.png"},
  {"itemtype":"session", "icon":"action-assessment", "title":"Charged Daily", "date":"05-02-2015", "kWh":34, "CO2":78},
  {"itemtype":"session", "icon":"action-assessment", "title":"Charged Daily", "date":"05-02-2015", "kWh":23, "CO2":51},
  ]

  //Needed for React Developer Tools
  window.React = React;

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  // Render the main app react component into the document body. 
  // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
  React.render(<Main data={data} />, document.body);

})();