import React from "react"
import { connect } from "react-redux"

export const WordDisplay = props => {
  return (
    <div className="wotd__display border-decoration">
      <span>{props.activeWord}</span>
      <span>{props.phonetic}</span>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(WordDisplay)
