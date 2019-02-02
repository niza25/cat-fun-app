export const GET_IMAGE = 'GET_IMAGE';

export function getImage(image) {
    return {
      type: GET_IMAGE,
      payload: image
    }
  }