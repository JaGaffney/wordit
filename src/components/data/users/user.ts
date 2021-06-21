import UserWord from "./userWord"

class User {
  activeWordList: Array<UserWord> = []

  getActiveWordList(): Array<object> {
    return this.activeWordList
  }
  setActiveWordList(data: UserWord) {
    this.activeWordList.push(data)
  }

  addNewWord(word: string, word_id: number) {
    let valid = true
    for (let i in this.activeWordList) {
      if (word === this.activeWordList[i].getWord()) {
        valid = false
        return
      }
    }
    if (valid) {
      const newWord = new UserWord(word, word_id)
      this.setActiveWordList(newWord)
    }
  }

  addWord(userword: UserWord) {
    const newWord = new UserWord(
      userword["word"],
      userword["word_id"],
      userword["spoken"],
      userword["written"],
      userword["used"]
    )
    this.setActiveWordList(newWord)
  }
}

export default User
