import React from 'react';
import {NavLink,withRouter} from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <li><NavLink to="/">Dashboard</NavLink></li>
            <li><NavLink to="/create-project">Create project</NavLink></li>
            <li><NavLink to="/signin">Sign in</NavLink></li>
            <li><NavLink to="/signup">Sign up</NavLink></li>
        </nav>
    )
}
export default withRouter(Navbar);