import React, { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";

const BookShelf = () => {

  const { isLight, light, dark } = useContext(ThemeContext);
  const theme = isLight ? light : dark;
  
  return (
    <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
      <ul>
        <li style={{ background: theme.ui }} >the way of kings</li>
        <li style={{ background: theme.ui }} >the name of the wind</li>
        <li style={{ background: theme.ui }} >the final empire</li>
      </ul>
    </div>
  );
}

export default BookShelf;