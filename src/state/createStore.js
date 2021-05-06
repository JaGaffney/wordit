import { createStore as reduxCreateStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import User from "../components/data/user"
import Data from "../components/data/data"

const UserData = new User()
const WordData = new Data()
const WordDataArray = WordData.getWordList()

// temp to add base data to user
for (let i in WordDataArray) {
  UserData.addNewWord(WordDataArray[i].getWord())
}

const initialState = {
  data: WordData,
  user: UserData,
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
