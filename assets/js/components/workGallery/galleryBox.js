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
      selected: null,
      path: null
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
    this.setState({ selected: id });
    React.Children.map(this.props.children, (child, i) => {
      console.log('here we go');
      if (child.elemId === id) {
        console.log(child);
      }
    })
    return null;
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
          link={post.link}
        />
      );
    });
    return GalleryNodes;
  },
  loadSelected(post, posts) {
    var path;
    for (var i = 0; i < posts.length; i++) {
      if (posts[i].id === post) {
         path = posts[i].link;
         this.context.router.push(path);
      }
    }
  },
  render() {
   var self = this;
   var posts = this.props.data.posts;
   var Children = this.state.selected !== null ? undefined : this.loadGallery(posts);
   return (
       <div className="gallery-container">
        {Children}
       </div>
    );
  }
});
