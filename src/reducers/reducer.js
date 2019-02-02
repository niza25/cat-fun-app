import { GET_IMAGE } from '../actions/getImage'
import { GET_FACTS} from '../actions/getFacts'

export default (state = {}, action = {}) => {
  switch (action.type) {
    case GET_IMAGE:
      return {
        ...state,
        image: action.payload
  }
    case GET_FACTS:
      return {
        ...state,
        facts: action.payload
      }
    default:
      return state
  }
}