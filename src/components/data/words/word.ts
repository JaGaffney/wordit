class Word {
  word: string = ""
  word_id: number = 0
  phonetic: string = ""
  description: string = ""
  use: string = ""
  type: string = ""

  constructor(
    word: string,
    word_id: number,
    phonetic: string,
    description: string,
    use: string,
    type: string
  ) {
    this.word = word
    this.word_id = word_id
    this.phonetic = phonetic
    this.description = description
    this.use = use
    this.type = type
  }

  getWord(): string {
    return this.word
  }

  getWordID(): number {
    return this.word_id
  }

  getWordInfo(): {
    word_id: number
    phonetic: string
    description: string
    use: string
    type: string
  } {
    return {
      word_id: this.word_id,
      phonetic: this.phonetic,
      description: this.description,
      use: this.use,
      type: this.type,
    }
  }
}

export default Word
