import {NavLink} from 'react-router-dom';

function Header(){

    return (
        <header>
            <h1>
                <NavLink exact to="/">
                    Saturday
                </NavLink>
            </h1>

            <ul id="gnb">
                <li><NavLink exact to="/gallery">Gallery</NavLink></li>
                <li><NavLink exact to="/media">Media</NavLink></li>
                <li><NavLink exact to="/board">Board</NavLink></li>
            </ul>
        </header>
    )
}
export default Header;