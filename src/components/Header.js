import { React } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Header.css';

export default function Header() {
   
    return (

        <div>
            <div className='header'>

                <nav className='navigation'>
                    <ul className='nav-items2'>
                        <li className='list-items'>
                            <Link to="/" className='active-state header-button'>Home </Link>
                        </li>
                        <li className='list-items'>
                            <Link to="/about" className='active-state header-button'>About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
