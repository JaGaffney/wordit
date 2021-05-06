import Word from "./word"

class Data {
  wordList: Array<Word> = []

  constructor() {
    for (let i in testWordList) {
      let newWord = new Word(
        testWordList[i],
        "phonetic test",
        "description test"
      )

      this.setActiveWordList(newWord)
    }
  }

  getWordList() {
    return this.wordList
  }

  getWordData(word: string): { phonetic: string; description: string } {
    let wordData = {
      phonetic: "",
      description: "",
    }
    for (let i in this.wordList) {
      if (word === this.wordList[i].getWord()) {
        wordData.phonetic = this.wordList[i].getPhonetic()
        wordData.description = this.wordList[i].getDescription()
      }
    }
    return wordData
  }

  setActiveWordList(data: Word) {
    this.wordList.push(data)
  }
}

export default Data

const testWordList = [
  "the",
  "be",
  "want",
  "because",
  "because",
  "because",
  "any",
  "these",
  "give",
  "day",
  "most",
  "us",
  "was",
  "is",
  "had",
  "were",
  "said",
]
