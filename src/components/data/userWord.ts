class Word {
  word: string = ""
  word_id: number
  spoken: Array<boolean> = [false, false, false]
  written: Array<boolean> = [false, false, false]
  used: boolean = false

  constructor(word: string, word_id: number) {
    this.word = word
    this.word_id = word_id
  }

  getWord() {
    return this.word
  }
  getUsed() {
    return this.used
  }

  getSpoken(): Array<boolean> {
    return this.spoken
  }
  setSpoken(location: number) {
    this.spoken[location - 1] = !this.spoken[location - 1]
  }
  getWritten(): Array<boolean> {
    return this.written
  }
  setWritten(location: number) {
    this.written[location - 1] = !this.written[location - 1]
  }
  setUsed() {
    this.used = !this.used
  }

  getAllData(): object {
    return {
      word: this.word,
      word_id: this.word_id,
      spoken: this.spoken,
      written: this.written,
      used: this.used,
    }
  }
}

export default Word
