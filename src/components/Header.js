import { React } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Header.css';

export default function Header() {
    { console.log("header component") }
    return (

        <div>
            <div className='header'>

                <nav className='navigation'>
                    <ul className='nav-items2'>

                        <Link to="/" className='active-state header-button'>Home </Link>

                        <li className='list-items'>

                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
