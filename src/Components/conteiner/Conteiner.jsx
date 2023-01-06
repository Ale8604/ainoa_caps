import React from "react";
import Cards from "../cards/Cards";
import './conteiner.css'

export function Conteiner (props){
    return (
        <section>
            <h2 className="title">lista de productos</h2>
            <div className="cont">
                {props.children}
            </div>
        </section>
    )
}