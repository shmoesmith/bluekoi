import axios from 'axios';
//todo: create different actions for all users' reviews vs. 
//an individual user's reviews

export const  addReview = (review) => {
  return(dispatch) => {
    axios.post('api/reviews', { review } )
    .then( res => dispatch({ type: ADD_REVIEW, review: res.data }) )
    }
}

export const updateReview = (review) => {
  return(dispatch) => {
    axios.put('api/reviews/${review.id', { review } )
    .then( res => dispatch({ type: UPDATE_REVIEW, review: res.data }) )
    }
}

export const deleteReview = (review) => {
  return(dispatch) => {
   axios.delete('api/reviews/${review}')
   .then( () => dispatch({ type: DELETE_REVIEW, review }) )
  }
}