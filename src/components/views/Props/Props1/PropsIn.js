import React from "react";

export default function PropsIn1(props) {

  const {url, size, name, dept} = props;
  

    return (
      <div className="card">
        <img src={url} width={size} height={size} className="avatar" />
        <p>Name: {name} <br/> Dept: {dept}</p>
      </div>
        
      );
}
