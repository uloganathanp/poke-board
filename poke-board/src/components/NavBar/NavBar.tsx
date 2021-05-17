import React from "react";
/**
 * Top Nav bar
 * @returns
 */
export function NavBar() {
  return (
    <nav
      className="navbar sticky-top navbar-dark"
      style={{ backgroundColor: "#00bfff" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={process.env.PUBLIC_URL + "/resource/images/PokeBoard.png"}
            style={{ width: "20%" }}
          />
        </a>
      </div>
    </nav>
  );
}
