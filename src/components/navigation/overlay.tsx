import React from 'react'
import { Link } from "gatsby"
import { connect } from 'react-redux'
import { Controls, PlayState, Timeline, Tween } from 'react-gsap';

import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';
import CancelIcon from '@material-ui/icons/Cancel';

export const Overlay = (props) => {

    return (
        <>
            <div className="hamburger-menu">
                <MenuIcon onClick={props.onCloseHandler} />
            </div>
            {props.open ? (
                <Timeline target={
                    <div className="overlay">
                        <div className="overlay__content">
                            <h2>Wordit</h2>
                            <p className="overlay__content-subhead">Application designed to help people with dyslexia increase their vocabulary (this is based on personal experience and has zero scientific background).</p>
                            <div className="overlay__content-cards">
                                <div className="overlay__content-card">
                                    <h3>See how it all works</h3>
                                    <p>Feel free to use any of the API endpoints, instructions on how to access the API can be viewed by clicking the button below</p>
                                    <a className="wotd__button" href="">View API</a>
                                </div>
                                {/* <div className="overlay__content-card">
                                    <h3>Copyright</h3>
                                    <p>Feel free to use the code and API, this is a personal imrpvoement style website </p>
                                    <a className="wotd__button" href="">Views API</a>
                                </div> */}

                            </div>

                        </div>
                        <div className="overlay__navigation">
                            <ul onClick={props.onCloseHandler}>
                                <li><Link to="/" >Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/daily">Daily (soon)</Link></li>
                                <li><Link to="/progress">Progress (soon)</Link></li>
                            </ul>
                            <ul className="overlay__navigation-external">
                                <li><a href="https://github.com/JaGaffney"><GitHubIcon /> Github</a></li>
                                <li><a href="https://jongaffney.tech/"><LanguageIcon />Portfollio</a></li>
                            </ul>
                        </div>
                        <div className="overlay__control">
                            <div onClick={props.onCloseHandler}>
                                <CancelIcon />
                            </div>

                        </div>
                    </div>}>
                    <Tween from={{ opacity: 0.6, x: '-400px' }} to={{ opacity: 1, x: '100px' }} duration={0.4} />


                </Timeline>
            )
                :
                (null)}
        </>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Overlay)
