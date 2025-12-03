// il reducer è il "cervellone", "robottone" della nostra app Redux
// si occupa di intercettare le actions che vengono "dispatchate" e
// interpretarne il type; a seconda del type, il reducer creerà
// il nuovo stato dell'app di conseguenza
// i reducer di un'app Redux sono delle FUNZIONI PURE:
// a) una funzione pure restituisce sempre lo stesso output se fornita
// sempre dello stesso input
// b) le funzioni pure NON mutano i loro parametri
// c) una funzione pura NON esegue "side-effects" (ad es. non può
// operare chiamate API)

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