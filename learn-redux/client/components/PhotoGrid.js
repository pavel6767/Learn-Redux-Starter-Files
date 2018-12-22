import React from 'react';

import Photo from './Photo';

export default class PhotoGrid extends React.Component {
  render() {
    return (
      <div className="photo-grid">
        {this.props.posts.map((post, inx) => (
          <Photo {...this.props} index={inx} post={post} key={inx} />
        ))}
      </div>
    );
  }
}
