import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <ul className="sidebar__link-menu">
                    <li className="link-item">
                        <NavLink className="link" to='#'>
                            <i className="link-icon far fa-folder"></i>
                        </NavLink>
                    </li>

                    <li className="link-item">
                        <NavLink className="link" to='#'>
                            <i className="fas fa-wave-square"></i>
                        </NavLink>
                    </li>

                    <li className="link-item">
                        <NavLink className="link" to='#'>
                            <i className="far fa-comment-alt"></i>
                        </NavLink>
                    </li>

                    <li className="link-item">
                        <NavLink className="link" to='#'>
                            <i className="fas fa-briefcase"></i>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar