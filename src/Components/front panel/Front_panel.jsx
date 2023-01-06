import React from "react";
import "./banner.css"
import img from './ainoacaps2.jpg'

export function FrontPanel () {
    return (
        <section className="home">
                <div className="contex">
                    <p className="principal"> Vive La Experiencia y Calidad  De Ainoa Caps </p>
                    <p className="secundario">La Mejor Calidad</p>
                </div>
                <div className="logo_dos">
                        <img src={img} alt="" className="logo"/>
                </div>
        </section>
    );
}