class Word {
  word: string = ""
  phonetic: string = ""
  description: string = ""

  constructor(word: string, phonetic: string, description: string) {
    this.word = word
    this.phonetic = phonetic
    this.description = description
  }

  getWord(): string {
    return this.word
  }
  getPhonetic(): string {
    return this.phonetic
  }
  getDescription(): string {
    return this.description
  }
}

export default Word
