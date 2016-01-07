var React = require('react');
var ReactDOM = require('react-dom');
// Components
var HeaderSection = require('./components/headerSection');
var WorkSection = require('./components/workSection');
var ContactSection = require('./components/contactSection');
var AboutSection = require('./components/aboutSection');
var data = require('./galleryData');


var App = React.createClass({
  render: function() {
    return (
      <div className="content">
        <HeaderSection />
        <AboutSection />
        <WorkSection data={this.props.data} />
        <ContactSection />
      </div>
    );
  }
});

ReactDOM.render(
  <App data={data} />,
  document.getElementById('container')
)