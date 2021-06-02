import React from 'react'
import { connect } from 'react-redux'
import RestoreIcon from '@material-ui/icons/Restore';
import UpdateIcon from '@material-ui/icons/Update';

import { undoHandler } from "../actions/api"

export const Undo = (props) => {
    // command pattern

    return (
        <div className="undo__container">
            <div onClick={() => props.undoHandler("UNDO")} className={props.undoData.length < 1 ? "disabled__button" : ""}>
                <RestoreIcon />
            </div>
            <div onClick={() => props.undoHandler("REDO")} className={props.redoData.length < 1 ? "disabled__button" : ""}>
                <UpdateIcon />
            </div>

        </div>
    )
}


const mapStateToProps = ({ user, forceLoad, undoData, redoData }) => {
    return { user, forceLoad, undoData, redoData }
}


const mapDispatchToProps = { undoHandler }

export default connect(mapStateToProps, mapDispatchToProps)(Undo)
