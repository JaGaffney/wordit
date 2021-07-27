import { createStore as reduxCreateStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

import User from "../components/data/users/user"
import Data from "../components/data/words/data"

const onLoadData = () => {
  if (typeof Storage !== "undefined") {
    let retrievedObject = null
    if (typeof window !== "undefined") {
      retrievedObject = localStorage.getItem("user")
    } else {
      return new User()
    }

    if (retrievedObject === null) {
      return new User()
    }
    let deepClone = JSON.parse(retrievedObject)
    const returnedData = new User()
    for (let i in deepClone["activeWordList"]) {
      returnedData.addWord(deepClone["activeWordList"][i])
    }
    if (returnedData !== undefined) {
      return returnedData
    }
  } else {
    // No web storage Support.
    return new User()
  }
}

const UserData = onLoadData()
const WordData = new Data()
// add default word
const WordDataArray = WordData.getWordList()
if (UserData.getActiveWordList.length === 0) {
  UserData.addNewWord(WordDataArray[0].getWord(), WordDataArray[0].getWordID())
}

const initialState = {
  data: WordData,
  user: UserData,
  wotd: "",
  forceLoad: 0,
  undoData: [],
  redoData: [],
  difficultyArray: [...Array(3).keys()].map(x => ++x),
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
  if (init.length > 30) {
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
