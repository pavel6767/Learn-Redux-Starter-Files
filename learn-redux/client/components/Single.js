import React from 'react';

import Photo from './Photo';
import Comments from './Comments';

export default class Single extends React.Component {
  render() {
    console.log('Single[props] :: ', this.props);
    const inx = this.props.posts.findIndex(
      post => post.code === this.props.params.postId
    );
    const post = this.props.posts[inx];
    return (
      <div className="single-photo">
        <Photo {...this.props} inx={inx} post={post} />
        <Comments />
      </div>
    );
  }
}
