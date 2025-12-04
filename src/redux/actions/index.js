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

