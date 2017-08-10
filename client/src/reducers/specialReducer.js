const specials = (state =[], action )  => {
    switch(action.type) {
        case 'SET_SPECIALS':
          return action.specials
        case 'ADD_SPECIAL':
         return [action.special, ...state]
        case 'DELETE_SPECIAL':
          return state.filter( s => s.id !== action.id)
        default:
          return state;
        }
 }

 export default specials;