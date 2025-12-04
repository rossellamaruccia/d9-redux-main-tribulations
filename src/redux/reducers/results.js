import { UPDATE_LIST } from "../actions"

const initialState = {
  resultsList: {
    content: [],
  },
}

const resultsReducer = function (currentState = initialState, action) {
  switch (action.type) {
    case UPDATE_LIST:
      return {
        ...currentState,
        content: [currentState.content.concat(action.payload)],
      }

    default:
      return currentState
  }
}

export default resultsReducer
