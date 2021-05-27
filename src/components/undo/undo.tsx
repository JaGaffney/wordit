import React from 'react'
import { connect } from 'react-redux'

import { undoHandler } from "../actions/api"

export const Undo = (props) => {
    // command pattern

    return (
        <div>
            <button onClick={() => props.undoHandler("UNDO")}>Undo</button>
            <button onClick={() => props.undoHandler("REDO")}>Redo</button>
        </div>
    )
}


const mapStateToProps = ({ user, forceLoad }) => {
    return { user, forceLoad }
}


const mapDispatchToProps = { undoHandler }

export default connect(mapStateToProps, mapDispatchToProps)(Undo)
