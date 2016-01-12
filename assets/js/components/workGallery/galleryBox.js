//galleryBox

var React = require('react');
var GalleryElem = require('./galleryElem');
var SelectedElem = require('./SelectedElem');

var GalleryBox = React.createClass({
  getInitialState: function() {
    return {
      hover: null,
      selected: null
    };
  },
  mouseOver: function(id) {
    this.setState({
      hover: id
    });
  },
  mouseOut: function() {
    this.setState({
      hover: null
    })
  },
  handleClick: function(id) {
    this.setState({ selected: id }, function() {
      console.log(this.state.selected);
    });
  },
  loadGallery: function(posts) {
    var GalleryNodes = posts.map(function(post) {
      var hover;
      if (this.state.hover === null || this.state.hover === post.id) {
          hover = true;
        } else {
          hover = false;
      };
      return (
        <GalleryElem
          key={post.id}
          elemID={post.id}
          title={post.title}
          tags={post.tags}
          mouseOver={this.mouseOver}
          mouseOut={this.mouseOut}
          onClick={this.handleClick}
          hover={hover}
          className={post.className}
        />
      );
    });
    return GalleryNodes;
  },
  loadSelected: function(id, posts) {
    var Selected;
    for (var i; i < posts.length; i++) {
      if (posts[i].id === id) {
      }
    }
  },
  render: function() {
   var self = this;
   var posts = this.props.data.posts;
   var GalleryContent = this.state.selected !== null ? loadSelected(this.state.selected, posts) : loadGallery(posts, self).bind(this);



    return (
       <div className="gallery-container">
        {GalleryContent}
      </div>
    );
  }
});

module.exports = GalleryBox;