import { createStore as reduxCreateStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

const initialState = {
  data: []
}

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const middleware = [thunk]

const createStore = () =>
  reduxCreateStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
export default createStore
