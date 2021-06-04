const localStorageSave = data => {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(data))
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
  localStorageSave(user)
  return dispatch({
    type: "UPDATE_USER",
  })
}

export const completeWord = (
  user,
  data,
  word: string,
  newWord: boolean
) => dispatch => {
  const userData = user.getActiveWordList()

  for (let i in userData) {
    if (userData[i].getWord() === word) {
      userData[i].setUsed()
    }
  }

  if (newWord) {
    // check to see if you need to add a new word or use an older one
    let counter = 0
    for (let i in userData) {
      if (userData[i].getUsed()) {
        counter += 1
      }
    }
    const latestWordID = userData[userData.length - 1]["word_id"]
    if (counter >= latestWordID) {
      const wordArray = data.getWordList()
      for (let i in wordArray) {
        if (wordArray[i]["word_id"] === latestWordID + 1) {
          user.addNewWord(wordArray[i].getWord(), wordArray[i].getWordID())
        }
      }
    }
  }

  localStorageSave(user)
  return dispatch({
    type: "UPDATE_USER",
  })
}

export const undoHandler = (undoType: string) => dispatch => {
  return dispatch({
    type: undoType,
  })
}
