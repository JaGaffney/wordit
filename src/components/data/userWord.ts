class Word {
  word: string = ""
  spoken: number = 0
  written: number = 0
  used: boolean = false

  constructor(word: string) {
    this.word = word
  }

  getWord() {
    return this.word
  }
  getUsed() {
    return this.used
  }

  setSpoken() {
    this.spoken += 1
  }
  setWritten() {
    this.written += 1
  }
  setUsed() {
    this.used = true
  }

  getAllData(): object {
    return {
      word: this.word,
      spoken: this.spoken,
      written: this.written,
      used: this.used,
    }
  }
}

export default Word
