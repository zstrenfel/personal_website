// depreciated
// galleryRow.js

var React = require('react');
var GalleryElem = require('./galleryElem');

var GalleryRow = React.createClass({
  render: function() {
    var workNodes = this.props.data.map(function(post) {
      return (
          <GalleryElem title={post.title} text={post.text} key={post.id} tags={post.tags} size={post.className}/>
        )
    });
    return (
      <div className="gallery-row">
        {workNodes}
      </div>
    )

  }
});

module.exports = GalleryRow;