const initialState = {
  favourites: {
    content: [],
  },
}

const mainReducer = function (currentState = initialState, action) {

  switch (action.type) {

    case "ADD_TO_FAVS":
      return {
        ...currentState,
        favourites: {
        content: currentState.favourites.content.concat(action.payload)
        },
      }

    case "REMOVE_FROM_FAVS":
      return {
        ...currentState,
        favourites: {
          ...currentState.cart,
          content: currentState.favourites.content.filter((favElement) => {
            if (favElement._id === action.payload) {
              return false
            } else {
              return true
            }
          }),
        },
      }

    default:
      return currentState
  }
}

export default mainReducer