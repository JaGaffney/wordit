import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import ScoreTable from "./scoreTable"

export const Score = (props) => {

    useEffect(() => {
    }, [props.forceLoad])

    return (
        <div>
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
