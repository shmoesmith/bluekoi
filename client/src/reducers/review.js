 //todo: create an action type that distinguishes between all user review
 //and a single user's reviews
 
 const reviews = (state =[], action )  => {
    switch(action.type) {
        case 'REVIEWS':
          return action.reviews
        case 'ADD_REVIEW':
         return [action.review, ...state]
        case 'UPDATE_REVIEW':
          return state.map( r => {
            if (r.id === action.review.id)
              return action.review
            return r
          })
        case 'DELETE_REVIEW':
          return state.filter( r => r.id !== action.id)
        default:
          return state;
        }
 }

 export default reviews;