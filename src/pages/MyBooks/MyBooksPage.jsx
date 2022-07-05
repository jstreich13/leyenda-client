import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyBooksPage.scss";
import axios from "axios";

import { current } from "../../GetBooksFunction.jsx/GetBooks";

const MyBooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    current?.map((book) => {
      setBooks(book.results.books);
    });
  }, [books, current]);

  console.log(books);

  //  const randomizer = () = {

  //  }

  //   const [books, setBooks] = useState([]);
  //   const [favorites, setFavorites] = useState([]);
  //   const [searchValue, setSearchValue] = useState("");

  // https: axios
  //   .get(
  //     "https://www.googleapis.com/books/v1/volumes?q=AIzaSyD5kOGQwJnb8BECAUybmJ5uU59__bRVcSg&maxResults=40"
  //   )
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((e) => console.log(e));

  // const getBookRequest = async (searchValue) => {
  //   const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=883a6a10`;

  //   const response = await fetch(url);
  //   const responseJson = await response.json();

  //   if (responseJson.Search) {
  //     setBooks(responseJson.Search);
  //   }
  // };

  // // useEffect(() => {
  // //   getBookRequest(searchValue);
  // // }, [searchValue]);

  // useEffect(() => {
  //   const bookFavorites = JSON.parse(
  //     localStorage.getItem("react-book-app-favorites")
  //   );

  //   if (bookFavorites) {
  //     setFavorites(bookFavorites);
  //   }
  // }, []);

  // const handleFavoritesClick = (book) => {
  //   console.log(book);
  // };

  // const saveToLocalStorage = (items) => {
  //   localStorage.setItem("react-book-app-favorites", JSON.stringify(items));
  // };

  // const addFavoriteBook = (book) => {
  //   const newFavoriteList = [...favorites, book];
  //   setFavorites(newFavoriteList);
  //   saveToLocalStorage(newFavoriteList);
  // };

  // const removeFavoriteBook = (book) => {
  //   const newFavoriteList = favorites.filter(
  //     (favorite) => favorite.imdbID !== book.imdbID
  //   );

  //   setFavorites(newFavoriteList);
  //   saveToLocalStorage(newFavoriteList);
  // };

  return (
    // <div className='container-fluid movie-app'>
    // 			<div className='row d-flex align-items-center mt-4 mb-4'>
    // 				<MovieListHeading heading='Movies' />
    // 				<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
    // 			</div>
    // 			<div className='row'>
    // 				<MovieList
    // 					movies={movies}
    // 					handleFavouritesClick={addFavouriteMovie}
    // 					favouriteComponent={AddFavourites}
    // 				/>
    // 			</div>
    // 			<div className='row d-flex align-items-center mt-4 mb-4'>
    // 				<MovieListHeading heading='Favourites' />
    // 			</div>
    // 			<div className='row'>
    // 				<MovieList
    // 					movies={favourites}
    // 					handleFavouritesClick={removeFavouriteMovie}
    // 					favouriteComponent={RemoveFavourites}
    // 				/>
    // 			</div>
    // 		</div>

    <div className="container-fluid book-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <div className="col">
          <h1>My Books</h1>
        </div>
      </div>
      <div className="row">
        {/* <>
          {books.map((book, index) => (
            <div className="image-container d-flex justify-content-start m-3">
              <img src={book.book_image} alt="book"></img>
              <div
                // onClick={() => handleFavoritesClick(book)}
                className="overlay d-flex align-items-center justify-content-center"
              ></div>
            </div>
          ))}
        </> */}
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <div className="col">
          <h1>Featured</h1>
        </div>
        {/* <div className="col col-sm-4">
          <input
            className="form-control"
            value={value}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder="Type to search..."
          ></input>
        </div> */}
      </div>
      <div className="row">
        <>
          {books.map((book, index) => (
            <div className="image-container d-flex justify-content-start m-3">
              <img className="image" src={book.book_image} alt="book"></img>
              <div
                // onClick={() => handleFavoritesClick(book)}
                className="overlay d-flex align-items-center
                justify-content-center"
              ></div>
            </div>
          ))}
        </>
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <div className="col">
          <h1>My Queue</h1>
        </div>
      </div>
      <div className="row">
        <>
          {books.map((book, index) => (
            <div className="image-container d-flex justify-content-start m-3">
              <img src={book.book_image} alt="book"></img>
              <div
                // onClick={() => handleFavoritesClick(book)}
                className="overlay d-flex align-items-center justify-content-center"
              ></div>
            </div>
          ))}
        </>
      </div>
    </div>
  );
};

export default MyBooksPage;
