import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Main from './Main'

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <Sidebar />
                <Main />
            </div>
        )
    }
}

export default Dashboard
