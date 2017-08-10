import axios from 'axios';

export const getSpecials = () => {
  return(dispatch) => {
    axios.get(`/api/specials`)
      .then( res => {
        dispatch({ type: 'SET_SPECIALS', specials: res.data, headers: res.headers});
      })
      .catch( res => {
        dispatch(setFlash('Failed To Get Specials.', 'error'));
    });
  }
}

export const  addSpecial = (special) => {
  return(dispatch) => {
    axios.post('/api/specials', { special } )
    .then( res => dispatch({ type: ADD_SPECIAL, special: res.data, headers: res.headers}) )
    .catch( res => {
        dispatch(setFlash('Failed To Create Special.', 'error'))
      });
    }
}

export const deleteSpecial = (id) => {
  return(dispatch) => {
    axios.delete(`/api/specials//${id}`)
      .then( res => {
        dispatch({ type: 'DELETE_SPECIAL', id, headers: res.headers});
      })
      .catch( res => {
        dispatch(setFlash('Failed To Delete Special.', 'error'))
      });
  }
}