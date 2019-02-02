import { GET_IMAGE } from '../actions/getImage'

export default (state = [], action = {}) => {
  switch (action.type) {
    case GET_IMAGE:
    return action.payload
    default:
  return state
  }
}