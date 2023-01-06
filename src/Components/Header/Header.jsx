import './header.css';
import { Link } from "react-router-dom";

export function Header(){
    return (
        <header>
            <nav>
                <div className="img"></div>
                <div className="conteiner">
                    <span><Link to='/'><p>inicio</p></Link></span>
                    <span><Link to='/Category'><p>categoria</p></Link></span>
                    <span><Link to='/Shopping'><p>carrito </p></Link></span>
                </div>
            </nav>
        </header>
    )
}