import React from 'react'
import { connect } from 'react-redux'

import { completeWord } from "../actions/api"

import WordCheckbox from "../wotd/wordCheckbox"

export const ScoreTable = (props) => {
    const onUsedHandler = (id) => {
        let word = id.split(":")
        props.completeWord(props.user, word[1])
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
                                            wordControlHandler={() => { }}
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
                                            wordControlHandler={() => { }}
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
                                {i.used ? "true" : "false"}
                            </td>
                        </tr>
                    )
                })}
            </tbody>

        </table>
    )
}


const mapStateToProps = ({ user, forceLoad }) => {
    return { user, forceLoad }
}

const mapDispatchToProps = { completeWord }

export default connect(mapStateToProps, mapDispatchToProps)(ScoreTable)
