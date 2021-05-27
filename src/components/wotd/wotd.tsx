import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import DescriptionIcon from '@material-ui/icons/Description';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import HelpIcon from '@material-ui/icons/Help';

import { setWOTD } from "../actions/api"

import WordDisplay from "./wordDisplay"
import WordContol from "./wordControl"


interface WordInfo {
  phonetic?: string,
  description?: string,
  use?: string,
  type?: string
}

export const WOTD = props => {
  const [newWord, setNewWord] = useState<boolean>(false)
  const [activeUserDataSpoken, setActiveUserDataSpoken] = useState<boolean[]>([false, false, false])
  const [activeUserDataWritten, setActiveUserDataWritten] = useState<Array<boolean>>([false, false, false])
  const [activeData, setActiveData] = useState<WordInfo>({})

  useEffect(() => {
    const userData = props.user.getActiveWordList()
    for (let i in userData) {
      if (!userData[i].getUsed()) {
        props.setWOTD(userData[i].getWord())
        return
      }
    }
  }, [newWord])

  useEffect(() => {
    console.log(props.user)
    const userData = props.user.getActiveWordList()
    for (let i in userData) {
      if (userData[i].getWord() === props.wotd) {
        setActiveUserDataSpoken(userData[i].getSpoken())
        setActiveUserDataWritten(userData[i].getWritten())
        setActiveData(props.data.getWordData(userData[i].getWord()))
      }
    }
  }, [props.forceLoad, props.wotd])


  const onWordChange = () => {
    setNewWord(!newWord)
  }

  return (
    <div className="wotd">
      <div className="title">
        <h1>Word of the Day</h1>
      </div>


      <WordDisplay
        activeWord={props.wotd}
        phonetic={
          activeData.phonetic
        }
      />

      <div className="wotd__info border-decoration">
        <p>
          <span><DescriptionIcon /></span>
          <span>{activeData.description}.</span>
        </p>
        <p>
          <span><ChatBubbleIcon /></span>
          <span>"{activeData.use}".</span>
        </p>
        <p>
          <span><HelpIcon /></span>
          <span>
            <i>
              <a
                href={`https://en.wikipedia.org/wiki/${props.wotd}`}
              >{`https://en.wikipedia.org/wiki/${props.wotd}`}</a>
            </i>
          </span>
        </p>
      </div>

      <WordContol activeWord={props.wotd} activeUserDataSpoken={activeUserDataSpoken} activeUserDataWritten={activeUserDataWritten} onWordChange={onWordChange} />
    </div>
  )
}

const mapStateToProps = ({ wotd, data, user, forceLoad }) => {
  return { wotd, data, user, forceLoad }
}

const mapDispatchToProps = { setWOTD }

export default connect(mapStateToProps, mapDispatchToProps)(WOTD)
