import React from 'react';

export default class Comments extends React.Component {
  renderComment(comment, inx) {
    return (
      <div className="comment" key={inx}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    );
  }
  render() {
    console.log('Comments[props] :: ', this.props);
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment.bind(this))}
        <form ref="commentForm" className="comment-form">
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}
