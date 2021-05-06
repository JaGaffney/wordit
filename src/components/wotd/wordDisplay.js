import React from "react"
import { connect } from "react-redux"

export const WordDisplay = props => {
  return (
    <div className="wotd__display">
      <span>{props.activeWord}</span>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(WordDisplay)
