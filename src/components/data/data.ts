import Word from "./word"

class Data {
  wordList: Array<Word> = []

  constructor() {
    const words = require("./words.json")
    for (let word in words) {
      let newWord: Word = new Word(
        word,
        words[word].phonetic,
        words[word].description,
        words[word].use,
        words[word].type
      )
      this.setActiveWordList(newWord)
    }
  }

  getWordList() {
    return this.wordList
  }

  getWordData(
    word: string
  ): {
    phonetic: string
    description: string
    use: string
    type: string
  } {
    let wordData = {
      phonetic: "",
      description: "",
      use: "",
      type: "",
    }
    for (let i in this.wordList) {
      if (word === this.wordList[i].getWord()) {
        wordData = this.wordList[i].getWordInfo()
      }
    }
    return wordData
  }

  setActiveWordList(data: Word) {
    this.wordList.push(data)
  }
}

export default Data
