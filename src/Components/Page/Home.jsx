import React from "react";
import { FrontPanel } from "../front panel/Front_panel";
import { Conteiner } from "../conteiner/Conteiner";
import Cards from "../cards/Cards";
import data from '../info.json';

export function Home (){
    return (
        <>
            <FrontPanel></FrontPanel>
            <Conteiner>
                    {data.map( items => {
                    return <Cards 
                        key={items.id}
                        name={items.brand}
                        price={items.price}
                        image={items.img}
                        provedor={items.provedor}
                        />
                })}
            </Conteiner>
        </>
    )
}