(function () {
  var React = require('react'),
    injectTapEventPlugin = require("react-tap-event-plugin"),
    Main = require('./components/main.jsx'); // Our custom react component


var barColor = "rgba(128,160,255,1)";

var chartData = {
    labels: ["16", "17", "18", "19", "20", "21", "22"],
    datasets: [
        {
            fillColor: barColor,
            strokeColor: barColor,
            pointColor: barColor,
            pointStrokeColor: barColor,
            pointHighlightFill: barColor,
            pointHighlightStroke: barColor,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

var userData = {
  cards: ["NL-TNM-123456-7","NL-TNM-123456-8","NL-TNM-123456-9"],
  user: {
    id: "1",
    email: "g.assies@thenewmotion.com",
    name: "Gertjan Assies"
  }
}

var data = [
    {id:0, "itemtype":"badge",   "icon":"action-bookmark",              "title":"Improving...", "picture":"./images/improve.png", "description":"You charged more today than yesterday, keep up the good work"},
    {id:1, "itemtype":"session", "icon":"device-battery-charging-full", "title":"Charged", "date":"26-03-2015", "kWh":20, "CO2":45},
    {id:2, "itemtype":"session", "icon":"device-battery-charging-full", "title":"Charged", "date":"25-03-2015", "kWh":13, "CO2":34},
    {id:3, "itemtype":"badge",   "icon":"action-bookmark",              "title":"Drove around the world", "picture":"./images/globe.png", "description":"Congratulations, you charged over 8000 kWh. that is enough to drive around the world!"},
    {id:4, "itemtype":"session", "icon":"device-battery-charging-full", "title":"Charged", "date":"24-03-2015", "kWh":16, "CO2":37},
    {id:5, "itemtype":"weekly",  "icon":"action-assessment",            "title":"Charged Weekly", "week":"2015 12", kWh:234, "CO2":345, "data":chartData},
    {id:6, "itemtype":"session", "icon":"device-battery-charging-full", "title":"Charged", "date":"22-03-2015", "kWh":34, "CO2":78},
    {id:7, "itemtype":"session", "icon":"device-battery-charging-full", "title":"Charged", "date":"21-03-2015", "kWh":23, "CO2":51},
  ]

  //Needed for React Developer Tools
  window.React = React;

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();

  //React.initializeTouchEvents(true);

  React.render(<Main data={data} userData={userData}/>, document.body);

})();