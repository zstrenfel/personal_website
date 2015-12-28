var React = require('react');
var ReactDOM = require('react-dom');

var Header = React.createClass({
  render = function() {
    return (
      <div className="header">
        Hello, this is the header section, made with React!
      <div>
    );
  }
});

ReactDOM.render(
  <Header />
  document.getElementById('content');
)