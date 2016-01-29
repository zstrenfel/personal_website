// headerSection.js
var React = require('react');

var HeaderSection = React.createClass({
  render: function() {
    return (
      <div className="header">
        <div className="half-column image">
          <img src={"https://api.fnkr.net/testimg/350x200/00CED1/FFF/?text=img+placeholder"} />
        </div>
        <div className="half-column text">
           <h1>Zach Strenfel</h1>
          UC Berkeley Student, Design, Deep Thinking, House Plant Enthusiest
        </div>
      </div>
    );
  }
});

module.exports = HeaderSection;