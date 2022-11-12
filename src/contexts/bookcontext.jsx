import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {

    const [books, setBooks] = useState([
        {title: 'Demian'},
        {title: 'The Stranger'},
        {title: 'The Silmarillion'},
        {title: 'Paradise Lost'}
    ]);

    return ( 
        <BookContext.Provider value={{books, setBooks}}>
            {props.children}
        </BookContext.Provider>
     );
}

export default BookContextProvider;
