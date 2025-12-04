import { ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../actions"

const initialState = {
  favourites: {
    content: [],
  },
}

const favReducer = function (currentState = initialState, action) {
  switch (action.type) {
    case ADD_TO_FAVOURITE:
      return {
        ...currentState,
          content: [...currentState.content, action.payload],
      }

    case REMOVE_FROM_FAVOURITE:
      return {
        ...currentState,
        content: [
          currentState.content.filter((favElement) => {
            if (favElement === action.payload) {
              return false
            } else {
              return true
            }
          }),
        ],
      }

    default:
      return currentState
  }
}

export default favReducer
