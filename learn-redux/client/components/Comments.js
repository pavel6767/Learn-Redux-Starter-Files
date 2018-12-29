import React from 'react';

export default class Comments extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }
  renderComment(comment, inx) {
    return (
      <div className="comment" key={inx}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button
            className="remove-comment"
            onClick={this.props.removeComment.bind(
              null,
              this.props.params.postId,
              inx
            )}
          >
            &times;
          </button>
        </p>
      </div>
    );
  }
  render() {
    console.log('comments :: ', this);
    return (
      <div className="comments">
        {this.props.postComments.map((comment, inx) => {
          return (
            <div className="comment" key={inx}>
              <p>
                <strong>{comment.user}</strong>
                {comment.text}
                <button
                  className="remove-comment"
                  onClick={this.props.removeComment.bind(
                    null,
                    this.props.params.postId,
                    inx
                  )}
                >
                  &times;
                </button>
              </p>
            </div>
          );
        })}
        <form
          ref="commentForm"
          className="comment-form"
          onSubmit={this.handleSubmit}
        >
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}
