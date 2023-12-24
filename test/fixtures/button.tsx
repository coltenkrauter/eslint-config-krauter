import React from "react";

interface ButtonProps {
    text: string;
    description: string;
}

export function Button(props: ButtonProps) {
  
    return (
      <div>{props.text} – {props.description}</div>
    );
  }
  