import React, { Component } from 'react'
import Navbar from './Navbar'

class Main extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <header>
                    <Navbar />
                </header>
            </div>
        )
    }
}

export default Main