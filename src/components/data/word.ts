class Word {
  word: string = ""
  phonetic: string = ""
  description: string = ""
  use: string = ""
  type: string = ""

  constructor(
    word: string,
    phonetic: string,
    description: string,
    use: string,
    type: string
  ) {
    this.word = word
    this.phonetic = phonetic
    this.description = description
    this.use = use
    this.type = type
  }

  getWord(): string {
    return this.word
  }

  getWordInfo(): {
    phonetic: string
    description: string
    use: string
    type: string
  } {
    return {
      phonetic: this.phonetic,
      description: this.description,
      use: this.use,
      type: this.type,
    }
  }
}

export default Word
