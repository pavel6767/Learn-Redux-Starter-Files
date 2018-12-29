import React from 'react';

import Photo from './Photo';
import Comments from './Comments';

export default class Single extends React.Component {
  render() {
    const { postId } = this.props.params;
    const inx = this.props.posts.findIndex(post => post.code === postId);
    const post = this.props.posts[inx];
    const postComments = this.props.comments[postId] || [];
    return (
      <div className="single-photo">
        <Photo {...this.props} inx={inx} post={post} />
        <Comments {...this.props} postComments={postComments} />
      </div>
    );
  }
}
