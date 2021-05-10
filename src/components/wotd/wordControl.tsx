import React from "react"
import { connect } from "react-redux"

import { updateWordChallenge, completeWord } from "../actions/api"

import WordCheckbox from "./wordCheckbox"

export const WordControl = props => {
  const wordControlHandler = id => {
    let data = id.split(":")
    data.push(props.activeWord)
    props.updateWordChallenge(props.user, data)

  }

  const wordChangeHandler = () => {
    props.completeWord(props.user, props.activeWord)
    props.onWordChange()
  }

  const tempRange = [1, 2, 3]

  const checkBox = (type: string, arr: Array<boolean>) => {
    return (
      <div className="wotd__control-container">
        <div>
          <h2>{type}</h2>
          {tempRange.map(i => {
            return (
              <WordCheckbox
                checkedBox={arr[i - 1]}
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
      {checkBox("spoken", props.activeUserDataSpoken)}
      {checkBox("written", props.activeUserDataWritten)}
      <button onClick={wordChangeHandler}>Complete</button>
    </div>
  )
}

const mapStateToProps = ({ user }) => {
  return { user }
}

const mapDispatchToProps = { updateWordChallenge, completeWord }

export default connect(mapStateToProps, mapDispatchToProps)(WordControl)