//galleryBox

var React = require('react');
var GalleryRow = require('./galleryRow');

var GalleryBox = React.createClass({
  render: function() {
    var GalleryNodes = [],
        rows = this.props.data.rows;

    for(var r in rows) {
      GalleryNodes.push(
        <GalleryRow data={rows[r].data} key={rows[r].id} />
      );
    }

    return (
       <div className="gallery-container">
        {GalleryNodes}
      </div>
    );
  }
});

module.exports = GalleryBox;