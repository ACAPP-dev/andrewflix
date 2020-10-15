import React from 'react'
import logo from '../images/logo.png'

export default class NavBar extends React.Component {
    render() {
        return (
            <div id='navbar-div'>
                <div>
                    <img id='andrew-logo' alt='logo' src={logo} />
                </div>
                <div className='navbar-menu-div'>
                    <span style={{"fontWeight":'700'}}>Home</span>
                    <span>TV Shows</span>
                    <span>Movies</span>
                    <span>Latest</span>
                    <span>My List</span>
                </div>
                <div className='navbar-menu-div'>
                    <span>Search Img</span>
                    <span>KIDS</span>
                    <span>DVD</span>
                    <span>Gift Img</span>
                    <span>Bell Img</span>
                    <span>Login Img</span>
                </div>
            </div>

        )
    }

}

