class Word {
  word: string = ""
  spoken: Array<boolean> = [false, false, false]
  written: Array<boolean> = [false, false, false]
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
      spoken: this.spoken,
      written: this.written,
      used: this.used,
    }
  }
}

export default Word
