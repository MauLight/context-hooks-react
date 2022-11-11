import React, { Component } from "react";
import { ThemeContext } from "../contexts/themeContext";
class Bookshelf extends Component {
  static contextType = ThemeContext;



  render() {
    console.log(this.context);
    const { isLight, light, dark } = this.context;
    const theme = isLight ? light : dark;

    return (
      <div className="book-list" style={{background: theme.bg, color: theme.syntax}}>
        <ul>
          <li style= {{background: theme.ui}} >the way of kings</li>
          <li style= {{background: theme.ui}} >the name of the wind</li>
          <li style= {{background: theme.ui}} >the final empire</li>
        </ul>
      </div>
    );
  }
};

export default Bookshelf;