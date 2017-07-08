import React from 'react';
import { getAllReviews } from  '../actions/reviewActions';
import { connect } from 'react-redux';

class AllReviews extends Component {
  componentDidMount() {
    dispatch(getAllReviews);
  }
  render() {
    let { name, comment } = this.props
    //map over state and return a list of uesrnames and reviews set in nice boxes
    
  }
}

const mapStateToProps = (state) => {
  return { name: state.name
           comment: state.comment
  }
}
export default Connect(mapStateToProps)(AllReviews);