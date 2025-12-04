export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE"

export const addToFavouriteAction = (favElement) => {
    return {
        type: ADD_TO_FAVOURITE,
        payload: favElement,
    }
}

export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE"

export const removeFromFavouriteAction = (favElement) => {
    return {
        type: REMOVE_FROM_FAVOURITE,
        payload: favElement
    }
}

export const UPDATE_LIST = "UPDATE_LIST"

export const updateListAction = () => {
  return (dispatch, getState) => {

    const currentState = getState()
    console.log('currentState', currentState)

    fetch("https://strive-benchmark.herokuapp.com/api/jobs?company=")
      .then((r) => {
        if (r.ok) {
          return r.json()
        } else {
          throw new Error("Errore nel recupero risultati")
        }
      })
      .then((results) => {
        console.log("risultati", results)
        dispatch({
          type: UPDATE_LIST,
          payload: results,
        })
      })
      .catch((err) => {
        console.log(typeof err)
      })
  }
}

