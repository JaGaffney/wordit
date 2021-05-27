import React from "react"
import { connect } from "react-redux"

import Checkbox from "@material-ui/core/Checkbox"

export const WordControl = props => {

  const onHandleChange = e => {
    props.wordControlHandler(e.target.id)
  }

  return (
    <Checkbox
      checked={props.checkedBox}
      onChange={onHandleChange}
      inputProps={{ "aria-label": "primary checkbox" }}
      id={props.wordType + ":" + props.wordNumber}
    />
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(WordControl)
