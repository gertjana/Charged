(function () {
  var React = require('react'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    Main = require('./components/main.jsx'); // Our custom react component


var chartData = {
    labels: ["16", "17", "18", "19", "20", "21", "22"],
    datasets: [
        {
            fillColor: "rgba(128,160,255,1)",
            strokeColor: "rgba(128,160,255,1)",
            pointColor: "rgba(128,160,255,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(128,160,255,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

var data = [
    {id:0, "itemtype":"badge",   "icon":"action-bookmark",   "title":"Improvement", "picture":"", "description":"You charged more today than yesterday, keep up the good work"},
    {id:1, "itemtype":"session", "icon":"action-assessment", "title":"Charged Daily", "date":"05-02-2015", "kWh":20, "CO2":45},
    {id:2, "itemtype":"session", "icon":"action-assessment", "title":"Charged Daily", "date":"05-02-2015", "kWh":13, "CO2":34},
    {id:3, "itemtype":"badge",   "icon":"action-bookmark",   "title":"Drove around the world", "picture":"/www/images/globe.png", "description":"Congratulations, you charged enough kWh to drive around the world!"},
    {id:4, "itemtype":"session", "icon":"action-assessment", "title":"Charged Daily", "date":"05-02-2015", "kWh":16, "CO2":37},
    {id:5, "itemtype":"weekly",  "icon":"action-assessment", "title":"Charged Weekly", "week":"2015 12", kWh:234, "CO2":345, "data":chartData},
    {id:6, "itemtype":"session", "icon":"action-assessment", "title":"Charged Daily", "date":"05-02-2015", "kWh":34, "CO2":78},
    {id:7, "itemtype":"session", "icon":"action-assessment", "title":"Charged Daily", "date":"05-02-2015", "kWh":23, "CO2":51},
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