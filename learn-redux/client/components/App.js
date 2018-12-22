import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Main from './Main';
import * as actionCreators from '../actions/actionCreators';

const mapStateToProps = state => ({
  posts: state.posts,
  comments: state.comments
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
