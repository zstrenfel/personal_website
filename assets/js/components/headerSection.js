// headerSection.js
var React = require('react');

var HeaderSection = React.createClass({
  render: function() {
    return (
      <div className="header">
        <div className="half-column">
          <img src={"https://api.fnkr.net/testimg/350x200/00CED1/FFF/?text=img+placeholder"} />
        </div>
        <div className="half-column">
          <h1> Hello, </h1>
          <h3> my name is Zach Strenfel </h3>
          <p> this is some text about me that is important, but not that important </p>
        </div>
      </div>
    );
  }
});

module.exports = HeaderSection;