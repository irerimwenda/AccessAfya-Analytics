import React, { Component } from 'react'
import profile from '../assets/images/profile.jpg'
import { ProgressBar } from 'react-bootstrap'

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="navbar__add-assesment">
                    <button className="btn btn-light add-assessment-btn">Add Assessment +</button>
                </div>

                <div className="navbar__notify-bar">
                    <div className="patients-count">
                        <ProgressBar variant="primary" now={40} />
                        <p className="count">24k/24k patients seen</p>
                    </div>

                    <div className="user-profile">
                        <div className="profile-information">
                            <h6 className="title">Sandra Mamai</h6>
                            <span className="email">smamai@accessafya.com</span>
                        </div>
                        <img className="profile-picture" src={profile} alt="Sandra Mamai" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar