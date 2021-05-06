import UserWord from "./userWord"

class User {
  activeWordList: Array<UserWord> = []

  getActiveWordList(): Array<object> {
    return this.activeWordList
  }
  setActiveWordList(data: UserWord) {
    this.activeWordList.push(data)
  }

  addNewWord(word: string) {
    let valid = true
    for (let i in this.activeWordList) {
      if (word === this.activeWordList[i].getWord()) {
        valid = false
        return
      }
    }
    if (valid) {
      const newWord = new UserWord(word)
      this.setActiveWordList(newWord)
    }
  }
}

export default User
