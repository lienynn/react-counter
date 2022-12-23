import React from "react";

export default function Button(props) {
  let { action, title } = props;
  return <button class= "resetbutton" onClick={action}>{title}</button>;
}