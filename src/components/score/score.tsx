import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import ScoreTable from "./scoreTable"
import Undo from "../undo/undo"

export const Score = (props) => {

    useEffect(() => {
        console.log("reload")
    }, [props.forceLoad])

    return (
        <div className="score border-decoration">
            <Undo />
            {props.user.getActiveWordList().length > 0 ? <ScoreTable /> : null}
        </div>
    )
}



const mapStateToProps = ({ user, forceLoad }) => {
    return { user, forceLoad }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Score)
