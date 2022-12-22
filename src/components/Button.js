import React from "react";

export default function Button(props) {
  let { action, title } = props;
  return <button class= "button" onClick={action}>{title}</button>;
}
