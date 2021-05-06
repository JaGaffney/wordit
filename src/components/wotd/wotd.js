import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import WordDisplay from "./wordDisplay"
import WordContol from "./wordControl"

export const WOTD = props => {
  const [activeWord, setActiveWord] = useState("")
  const [activeData, setActiveData] = useState({
    phonetic: "",
    description: "",
  })

  useEffect(() => {
    const userData = props.user.getActiveWordList()
    for (let i in userData) {
      if (!userData[i].getUsed()) {
        setActiveWord(userData[i].getWord())
        setActiveData(props.data.getWordData(userData[i].getWord()))
        return
      }
    }
  }, [])

  // useEffect(() => {
  //   // const url =
  //   //   "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search='gza'"
  //   // const data = fetch(url)
  //   //   .then(response => response.json())
  //   //   .then(data => console.log(data))
  //   // console.log(data)
  // }, [])

  return (
    <div className="wotd">
      <h1>Word of the Day</h1>

      <WordDisplay activeWord={activeWord} />

      <div>
        <p>{activeData.description}</p>
        <p>use</p>
        <p>wiki link</p>
      </div>

      <WordContol />
    </div>
  )
}

const mapStateToProps = ({ data, user }) => {
  return { data, user }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(WOTD)
