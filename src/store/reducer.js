import { createStore } from "redux"
import * as ActionTypes from "./actions"
const initalState = {
  showNavbar: true
}

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_NAVBAR:
      return Object.assign({}, state, {
        showNavbar: true
      })
    case ActionTypes.HIDE_NAVBAR:
      return Object.assign({}, state, {
        showNavbar: false
      })

    default:
      return state
  }
}

export const store = () =>
  createStore(
    reducer
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
