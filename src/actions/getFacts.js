import request from 'superagent';
export const GET_FACTS = 'GET_FACTS';

export function getFacts(){
  return function (dispatch) {
    request('https://api.thecatapi.com/v1/breeds')
      .then(response => {
        return response.body
      })
      .then(response => {
        dispatch({
          type: GET_FACTS,
          payload: response
        })
      })
  }
}
