import React, { useContext } from "react";
import { BookContext } from "../contexts/bookcontext";
import { ThemeContext } from "../contexts/themeContext";

const BookShelf = () => {
  const {books} = useContext(BookContext);
  const { isLight, light, dark } = useContext(ThemeContext);
  const theme = isLight ? light : dark;
  
  return (
    <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
      <ul>
        {books.map((book, i) => {
          return (
            <li style={{ background: theme.ui, color: theme.syntax }} key= {i} className="list-group-item">{book.title}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default BookShelf;