import React from "react";
import "./header.css";



const Header = () => (
    <div className="header">
    
    <table className="table">
        <tbody>
          <tr>
            <td className="logo">
            <img  alt= "powers-by-tmdb" width= "50" src ="powered-by-square-greeen.svg" /></td>
            <td><h1>The Movie Data Base</h1></td>
          </tr>
        </tbody>
      </table>

    </div>
);


export default Header;