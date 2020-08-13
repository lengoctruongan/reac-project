import React from 'react'
import { Link, Route } from 'react-router-dom'
export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <div className="nav-brand">
                    <i class="fa fa-blender-phone"></i>
                    </div>
                   <ul className="navbar-nav">
                       <li className="nav-item">
                            <Link to="/">
                            </Link>
                       </li>
                   </ul>
                </div>
            </nav>
        </div>

    )
}
