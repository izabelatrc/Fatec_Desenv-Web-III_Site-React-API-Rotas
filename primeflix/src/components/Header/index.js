import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <div className="header-container"> 
                <Link className='logo' to='/'>PrimeFlix</Link>
                <nav id="nav">
                <ul className='menu'>
                    <li><a href="/#em-cartaz">Em cartaz</a></li>
                    <li><a href="/#em-breve">Em breve</a></li>
                    <li><a href="/#populares">Populares</a></li>
                    <li><a href="/#melhores-avaliados">Melhores Avaliados</a></li>
                    <Link className='sobre' to='/sobre'>Sobre</Link>
                </ul>
            </nav>
                <Link className='favoritos' to='/favoritos'>Minha Lista</Link>
            </div>
        </header>
    );
}

export default Header;