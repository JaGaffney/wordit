import React, { useState } from "react"
import { connect } from "react-redux"

import Checkbox from "@material-ui/core/Checkbox"

export const WordControl = props => {
  const [wordUsed, setWordUsed] = useState(false)

  const onHandleChange = e => {
    setWordUsed(!wordUsed)

    props.wordControlHandler(e.target.id)
  }

  return (
    <Checkbox
      checked={wordUsed}
      onChange={onHandleChange}
      inputProps={{ "aria-label": "primary checkbox" }}
      id={props.wordType + ":" + props.wordNumber}
    />
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(WordControl)
