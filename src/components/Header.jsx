import React from "react";

export default function Header(props) {
  const headerStyle = {
    background: props.bgColor,
    color: props.textColor,
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2 className="text-center">{props.title}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: "Feedback App",
  bgColor: "black",
  textColor: "yellow",
};
