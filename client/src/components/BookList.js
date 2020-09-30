import React, { Component } from 'react';
import { useQuery, gql } from '@apollo/client';

const getBooksQuery = gql`
query getBookList {
  books {
    name
    id
  }
}
`
function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.books.map(({id, name}) =>(
    <div id="main" key={id}>
<ul id="book-list">
  <li>Book ID: {id}</li>
  <li>Book Name: {name}</li>
 
    </ul>
      
    </div>
  ));

}

export default BookList;
