const localStorageSave = data => {
  if (typeof window !== "undefined") {
    localStorage.setItem("data", JSON.stringify(data))
  }
}

export const setWOTD = (word: string) => dispatch => {
  return dispatch({
    type: "SET_WOTD",
    payload: word,
  })
}

export const updateWordChallenge = (user, data: Array<string>) => dispatch => {
  const userData = user.getActiveWordList()
  const type = data[0]
  const number = data[1]
  const word = data[2]
  for (let i in userData) {
    if (userData[i].getWord() === word) {
      if (type === "spoken") {
        userData[i].setSpoken(number)
      }
      if (type === "written") {
        userData[i].setWritten(number)
      }
    }
  }
  // localStorageSave(data)
  return dispatch({
    type: "UPDATE_USER",
  })
}

export const completeWord = (user, word: string) => dispatch => {
  const userData = user.getActiveWordList()

  for (let i in userData) {
    if (userData[i].getWord() === word) {
      userData[i].setUsed()
    }
  }
  // localStorageSave(data)
  return dispatch({
    type: "UPDATE_USER",
  })
}

export const undoHandler = (undoType: string) => dispatch => {
  return dispatch({
    type: undoType,
  })
}
