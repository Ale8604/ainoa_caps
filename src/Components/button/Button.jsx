import React from "react";
import "./button.css";
import { useState } from "react";

export function Button({ Category, filter }) {
  return (
    <div className="categories">
      {Category.map((categories) => (
        <button
          key={categories}
          className="btn-category"
          onClick={() => filter(categories)}
        >
          <span>{categories}</span>
        </button>
      ))}
    </div>
  );
}
