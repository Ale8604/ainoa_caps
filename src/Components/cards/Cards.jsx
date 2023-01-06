import React, { useContext } from "react";
import './cards.css'
import { dataContex } from "../context/DataContex";

 function Cards (props){

    return (
            <div className="card">
                <img src={props.image} alt="" />
                <h3 className="provedor">{props.provedor}</h3>
                <p className="brand"> {props.name}</p>
                <p className="price">USD - {props.price}.0$</p>
                <div className="cont-button">
                    <button type="submit" className="button"bn ><span className="text">Agregar</span></button>
                </div>
            </div>
    )
}

export default Cards;