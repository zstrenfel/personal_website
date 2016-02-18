//galleryBox

import React from 'react'
import GalleryElem from './galleryElem'
import SelectedElem from './selectedElem'

var GalleryBox = React.createClass({
  componentWillUpdate: function() {
    console.log("componentWillUpdate");
  },
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
      console.log("selecter " + this.state.selected);
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
      if (posts[i].id === post) {
         Selected = <SelectedElem key={post}/>
      }
    }
    if (Selected == null) {
      console.log('selected is null');
      this.loadGallery(posts);
    }
    return Selected;
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