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
    const wordArray = data.getWordList()

    // turn data into an array
    const filterdWordArray = wordArray.map(v => v.word)
    const currentWordsArray = userData.map(v => v.word)

    // filter out the different values
    const newWordChoice: string = filterdWordArray.filter(
      (x: string) => currentWordsArray.indexOf(x) === -1
    )
    // randomise the word
    const randomWord =
      newWordChoice[Math.floor(Math.random() * newWordChoice.length)]

    if (randomWord !== undefined) {
      for (let i in wordArray) {
        if (wordArray[i]["word"] === randomWord) {
          user.addNewWord(wordArray[i].getWord())
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
