//galleryBox

import React from 'react'
import GalleryElem from './galleryElem'
import SelectedElem from './selectedElem'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState() {
    return {
      hover: null,
      selected: null
    };
  },
  mouseOver(id) {
    this.setState({
      hover: id
    });
  },
  mouseOut() {
    this.setState({
      hover: null
    })
  },
  handleClick(id) {
    var path;
    this.setState({ selected: id });
    this.props.data.posts.map((post) => {
      if (post.id === id) {
        path = post.path;
      }
    })
    this.context.router.push(path)
  },
  loadGallery(posts) {
    var self = this;
    var GalleryNodes = posts.map(function(post) {
      var hover;
      if (self.state.hover === null) {
        hover = true;
      } else {
          if (self.state.hover === post.id) {
            hover = true;
          } else {
            hover = false;
        }
      }
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
  render() {
   var self = this;
   var posts = this.props.data.posts;
   var Children = this.loadGallery(posts);
   return (
       <div className="gallery-container">
        {Children}
       </div>
    );
  }
});
