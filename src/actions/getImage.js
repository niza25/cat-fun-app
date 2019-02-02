import request from 'superagent';
export const GET_IMAGE = 'GET_IMAGE';

export function getRandomImage(){
  return function (dispatch) {
    request('https://api.thecatapi.com/v1/images/search')
      .then(response => {
        return response.body[0]['url']
      })
      .then(response => {
        dispatch({
          type: GET_IMAGE,
          payload: response
        })
      })
  }
}