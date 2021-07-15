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

var message = "";
var time = new Date().getHours();

const customStyle = {
  color: "green",
  fontSize: "20px",
  border: "1px solid black"
};

const customStyleTwo = {
  color: "blue"
};

if (time < 12) {
  message = "Good morning";
  customStyle.color = "red";
} else if (time < 18) {
  message = "Good afternoon";
  customStyle.color = "green";
} else if (time < 24) {
  message = "Good evening";
  customStyle.color = "blue";
}

customStyle.color = "purple";

ReactDOM.render(
  <div>
    <p> Created by {name} </p>
    <p> Copyright {currentYear} </p>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      {" "}
      My Favourite Foods{" "}
    </h1>
    <h1 style={customStyle}> Inline styling </h1>
    <h1 className="heading" style={customStyleTwo}>
      {" "}
      {message}{" "}
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
