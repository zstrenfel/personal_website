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
    var self = this;
    var GalleryNodes = posts.map(function(post) {
      var hover;
      if (self.state.hover === post.id) {
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
          mouseOver={self.mouseOver}
          mouseOut={self.mouseOut}
          onClick={self.handleClick}
          hover={hover}
          className={post.className}
        />
      );
    });
    return GalleryNodes;
  },
  loadSelected: function(post, posts) {
    var Selected;
    for (var i = 0; i < posts.length; i++) {
      console.log(posts[i]);
      if (posts[i].id === post) {
         Selected = <SelectedElem />
      }
    }
    if (Selected == null) {
      this.loadGallery(posts);
    }
  },
  render: function() {
   var self = this;
   var posts = this.props.data.posts;
   var GalleryContent = this.state.selected !== null ? this.loadSelected(this.state.selected, posts) : this.loadGallery(posts);
   return (
       <div className="gallery-container">
        {GalleryContent}
      </div>
    );
  }
});

module.exports = GalleryBox;