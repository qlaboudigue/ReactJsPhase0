//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";

const name = "Quentin";
const currentYear = new Date().getFullYear();
console.log(currentYear);

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <p> Created by {name} </p>
    <p> Copyright {currentYear} </p>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      {" "}
      My Favourite Foods{" "}
    </h1>
    <ul>
      <li> Bacon </li>
      <li> Jamon </li>
      <li> Noodles </li>
    </ul>
    <img className="image" src={img} alt="Random" />
  </div>,
  document.getElementById("root")
);
