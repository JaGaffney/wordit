import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { updateWordChallenge, completeWord } from "../actions/api"

import WordCheckbox from "../utils/wordCheckbox"

export const ScoreTable = (props) => {
    const onUsedHandler = (id) => {
        let word = id.split(":")
        props.completeWord(props.user, props.data, word[1], false)
    }

    const wordControlHandler = id => {
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
                                {tempRange.map((ii, kk) => {
                                    return (
                                        <WordCheckbox
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
                                {tempRange.map((ii, kk) => {
                                    return (
                                        <WordCheckbox
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
                                {
                                    <WordCheckbox
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
