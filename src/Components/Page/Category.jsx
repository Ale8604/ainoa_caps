import React from "react";
import { Conteiner } from "../conteiner/Conteiner";
import Cards from "../cards/Cards";
import data from "../info.json";
import { Button } from "../button/Button";
import { useState } from "react";

export function Category() {
  const allcategory = ["Todos", ...new Set(data.map((items) => items.category))];
  const [catagories, setCategories] = useState(allcategory);
  const [articles, setArticles] = useState(data);
  const filter = (category) => {

    if(category === 'Todos'){
        setArticles(data)
        return 
    }
    const filterData = data.filter(items => items.category === category)
    setArticles(filterData)
  };
  return (
    <>
      <Button Category={catagories} filter={filter} />
      <Conteiner>
        {articles.map((items) => {
          return (
            <Cards
              key={items.id}
              name={items.brand}
              price={items.price}
              image={items.img}
              provedor={items.provedor}
            />
          );
        })}
      </Conteiner>
    </>
  );
}
