import React from "react"
import { connect } from "react-redux"
import CreateIcon from '@material-ui/icons/Create';
import MicIcon from '@material-ui/icons/Mic';

import { updateWordChallenge, completeWord } from "../actions/api"

import WordCheckbox from "../utils/wordCheckbox"

export const WordControl = props => {
  const wordControlHandler = (id: string) => {
    let data = id.split(":")
    data.push(props.activeWord)
    props.updateWordChallenge(props.user, data)
  }

  const wordChangeHandler = () => {
    props.completeWord(props.user, props.data, props.activeWord, true)
    props.onWordChange()
  }

  const checkBox = (type: string, arr: Array<boolean>) => {
    return (
      <div className="wotd__control-container">
        <div className="border-decoration wotd__control-item">
          <i>{type === "spoken" ? <MicIcon /> : <CreateIcon />}</i>
          <h2>{type} </h2>
          {props.difficultyArray.map(i => {
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
    <>
      <div className="wotd__control">
        {checkBox("spoken", props.activeUserDataSpoken)}
        {checkBox("written", props.activeUserDataWritten)}
      </div>

      <div className="wotd__button-container">
        <button className="wotd__button" onClick={wordChangeHandler}>New Word</button>
      </div>
    </>
  )
}

const mapStateToProps = ({ user, data, forceLoad, difficultyArray }) => {
  return { user, data, forceLoad, difficultyArray }
}

const mapDispatchToProps = { updateWordChallenge, completeWord }

export default connect(mapStateToProps, mapDispatchToProps)(WordControl)
