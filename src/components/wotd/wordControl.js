import React from "react"
import { connect } from "react-redux"

import WordCheckbox from "./wordCheckbox"

export const WordControl = props => {
  const wordControlHandler = id => {
    let data = id.split(":")
    console.log(data)
  }

  const tempRange = [1, 2, 3, 4, 5]

  const checkBox = type => {
    return (
      <div className="wotd__control-container">
        <div>
          <h2>{type}</h2>
          {tempRange.map(i => {
            return (
              <WordCheckbox
                wordType={type}
                wordNumber={i}
                wordControlHandler={wordControlHandler}
                key={`${type}${i}`}
              />
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="wotd__control">
      {checkBox("spoken")}
      {checkBox("written")}
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(WordControl)
