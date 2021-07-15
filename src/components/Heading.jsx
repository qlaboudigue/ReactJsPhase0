import React from "react";

function Heading() {
  const img = "https://picsum.photos/200";
  const time = new Date().getHours();

  var message = "";

  const customStyle = {
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

  return (
    <div>
      <h1 className="heading" style={customStyle}>
        {" "}
        {message}{" "}
      </h1>
      <img className="image" src={img} alt="Random" />
    </div>
  );
}

export default Heading;
