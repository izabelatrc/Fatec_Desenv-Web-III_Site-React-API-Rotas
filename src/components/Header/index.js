import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="header-container"> 
                <Link className='logo' to='/'>PrimeFlix</Link>
                <Link className='favoritos' to='/favoritos'>Minha Lista</Link>
            </div>
        </header>
    );
}

export default Header;