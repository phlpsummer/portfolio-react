import {NavLink} from 'react-router-dom';

function Header(){
    return (
        <header>
            <h1>
                <NavLink exact to="/">
                    <div className="logo">
                        <span>Satur</span>
                        <span>day</span>
                    </div>
                </NavLink>
            </h1>

            <ul id="gnb">
                <li><NavLink exact to="/about">About</NavLink></li>
                <li><NavLink exact to="/gallery">Gallery</NavLink></li>
                <li><NavLink exact to="/media">Media</NavLink></li>
            </ul>
        </header>
    )
}
export default Header;