import { configureStore } from "@reduxjs/toolkit"
import favReducer from "../reducers/favs"
import resultsReducer from "../reducers/results"

const store = configureStore({
  reducer: {
    favourites: favReducer,
    results: resultsReducer,
  },
})

export default store
