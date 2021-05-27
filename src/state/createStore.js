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
  UserData.addNewWord(WordDataArray[i].getWord(), WordDataArray[i].getWordID())
}

const initialState = {
  data: WordData,
  user: UserData,
  wotd: "",
  forceLoad: 0,
  undoData: [],
  redoData: [],
}

const undoHandler = state => {
  let init = state.undoData

  let deepClone = JSON.parse(JSON.stringify(state.user))
  let clone = new User()
  for (let i in deepClone["activeWordList"]) {
    clone.addWord(deepClone["activeWordList"][i])
  }

  if (init.length > 9) {
    init.shift()
    init.push(clone)
  } else {
    init.push(clone)
  }
  return init
}

const setUndo = state => {
  let init = state.undoData
  let val = state.redoData.pop()
  if (init.length > 9) {
    init.shift()
    init.push(val)
  } else {
    init.push(val)
  }
  return init
}

const setRedo = state => {
  let init = state.redoData
  let val = state.undoData.pop()
  if (init.length > 9) {
    init.shift()
    init.push(val)
  } else {
    init.push(val)
  }
  return init
}

const redoHandler = state => {}

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_WOTD":
      return {
        ...state,
        wotd: action.payload,
      }
    case "UPDATE_USER":
      return {
        ...state,
        forceLoad: (state.forceLoad += 1),
        undoData: undoHandler(state),
      }
    case "UNDO":
      if (state.undoData.length <= 1) {
        return { ...state }
      } else {
        return {
          ...state,
          forceLoad: (state.forceLoad += 1),
          user: state.undoData[state.undoData.length - 2],
          redoData: setRedo(state),
        }
      }
    case "REDO":
      if (state.redoData.length <= 0) {
        return { ...state }
      } else {
        return {
          ...state,
          forceLoad: (state.forceLoad += 1),
          user: state.redoData[state.redoData.length - 1],
          undoData: setUndo(state),
        }
      }
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
