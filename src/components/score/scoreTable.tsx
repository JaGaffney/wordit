import React from 'react'
import { connect } from 'react-redux'
import CreateIcon from '@material-ui/icons/Create';
import MicIcon from '@material-ui/icons/Mic';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';

import { updateWordChallenge, completeWord } from "../actions/api"

import WordCheckbox from "../utils/wordCheckbox"


const WordCheckBoxMemo = React.memo(WordCheckbox)

export const ScoreTable = (props) => {
    const onUsedHandler = (id: string) => {
        let word = id.split(":")
        props.completeWord(props.user, props.data, word[1], false)
    }

    const wordControlHandler = (id: string) => {
        let data = id.split(":")
        data.push(props.activeWord)
        console.log("got here")
        props.updateWordChallenge(props.user, data)
    }

    const tempRange = [1, 2, 3]
    return (
        <table>
            <thead>
                <tr>
                    <th>Word</th>
                    <th>Spoken</th>
                    <th>Written</th>
                    <th>Used</th>
                </tr>
            </thead>
            <tbody>
                {props.user.getActiveWordList().map((i, k) => {
                    return (
                        <tr key={k + i.word}>
                            <td>
                                {i.word}
                            </td>
                            <td>
                                <div className="table-icon"><MicIcon /></div>

                                {tempRange.map((ii, kk) => {
                                    return (
                                        <WordCheckBoxMemo
                                            checkedBox={i.spoken[ii - 1]}
                                            wordType={"spoken"}
                                            wordNumber={ii}
                                            wordControlHandler={wordControlHandler}
                                            key={`${i.word}${ii}`}
                                        />
                                    )
                                })}

                            </td>
                            <td>
                                <div className="table-icon"><CreateIcon /></div>
                                {tempRange.map((ii, kk) => {
                                    return (
                                        <WordCheckBoxMemo
                                            checkedBox={i.written[ii - 1]}
                                            wordType={"written"}
                                            wordNumber={ii}
                                            wordControlHandler={wordControlHandler}
                                            key={`${i.word}${ii}`}
                                        />
                                    )
                                })}
                            </td>
                            <td>
                                <div className="table-icon"><EmojiPeopleIcon /></div>
                                {
                                    <WordCheckBoxMemo
                                        checkedBox={i.used}
                                        wordType={"used"}
                                        wordNumber={i.word}
                                        wordControlHandler={onUsedHandler}
                                        key={`${i.word}${1}`}
                                    />
                                }
                            </td>
                        </tr>
                    )
                })}
            </tbody>

        </table>
    )
}


const mapStateToProps = ({ user, data, forceLoad }) => {
    return { user, data, forceLoad }
}

const mapDispatchToProps = { updateWordChallenge, completeWord }

export default connect(mapStateToProps, mapDispatchToProps)(ScoreTable)
