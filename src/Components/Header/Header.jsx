import React from "react";
import './header.css';

export function Header(){
    return (
        <header>
            <nav>
                <div className="img"></div>
                <div className="conteiner">
                    <span><p>inicio</p></span>
                    <span><p>categoria</p></span>
                    <span><p>carrito</p></span>
                </div>
            </nav>
        </header>
    )
}