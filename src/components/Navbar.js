import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link to='/'>
                    <a className="navbar-brand">Squad Blog</a>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
