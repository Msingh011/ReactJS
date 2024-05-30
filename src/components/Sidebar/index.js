import React from "react";
import media from "../media";

export default function Sidebar() {
  const SidebarMenu = ["allProps", "TextTransform"];
  return (
    <>
      <div className="top-header">
        <div className="wrap">
          <div className="logo">
            <a href="/">
              <img src={media.logo} title="logo" className="App-logo"/>
            </a>
          </div>

          <div className="top-nav">
            <ul className="m-0 list-unstyled">
              {SidebarMenu.map((val) => {
                return (
                  <li key={val}>
                    <a className="text-white d-block text-capitalize" href={"/" + val}>{val}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="clear"> </div>
        </div>
      </div>
    </>
  );
}
