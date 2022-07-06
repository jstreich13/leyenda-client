import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyBooksPage.scss";
import axios from "axios";
import gatsby from "../../visual assets/gatsby.jpeg";
import potter from "../../visual assets/harry-potter.webp";
import sapiens from "../../visual assets/sapiens-image.jpeg";

import { current, series } from "../../GetBooksFunction.jsx/GetBooks";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MyBooksPage = () => {
  const [books, setBooks] = useState([]);
  const [bookSeries, setSeries] = useState([]);
  const [seriesDetails, setSeriesDetails] = useState(false);
  const [booksDetails, setBooksDetails] = useState("");
  const [bookId, setBookId] = useState("");
  const [queue, setQueue] = useState([]);
  const [isInQueue, setIsInQueue] = useState(false);

  useEffect(() => {
    current?.map((book) => {
      setBooks(book.results.books);
    });
    series?.map((book) => {
      setSeries(book.results.books);
    });
  }, [books, current, bookSeries]);

  const addToQueue = () => {
    let myQueue = {};
    books
      .filter((book) => book.isbns[0].isbn13 === bookId)
      .map((book) => {
        myQueue = book;
      });

    bookSeries
      .filter((book) => book.isbns[0].isbn13 === bookId)
      .map((book) => {
        myQueue = book;
      });

    setQueue((prevState) => [...prevState, myQueue]);

    closeDetails();
  };

  const deleteFromQueue = () => {
    let myQueue = queue.filter((book) => book.isbns[0].isbn13 !== bookId);
    setQueue(myQueue);
    setIsInQueue(false);
    closeDetails();
  };

  const handleSeriesDetails = (id) => {
    setSeriesDetails(true);
    setBookId(id);
  };
  const handleBooksDetails = (id) => {
    setBooksDetails(true);
    setBookId(id);
    queue.map((book) => {
      if (book.isbns[0].isbn13 === id) {
        setIsInQueue(true);
      } else {
        setIsInQueue(false);
      }
    });
  };

  const closeDetails = () => {
    setSeriesDetails(false);
    setBooksDetails(false);
    setBookId("");
  };

  return (
    <div className="container-fluid book-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <div className="col">
          <h1>My Books</h1>
        </div>
      </div>
      <div className="row">
        <div className="image-container d-flex justify-content-start m-3">
          <Link className="Nav-links" to="/reader">
            <div className="image-container d-flex justify-content-start m-3">
              <img className="image" src={gatsby} alt="Gatsby" />
            </div>
          </Link>
          <div className="image-container d-flex justify-content-start m-3">
            <img className="image" src={sapiens} alt="Lord of the Rings"></img>
          </div>
          <div className="image-container d-flex justify-content-start m-3">
            <img className="image" src={potter} alt="Lord of the Rings"></img>
          </div>

          <div className="overlay d-flex align-items-center justify-content-center"></div>
        </div>
      </div>

      <div className="row d-flex align-items-center mt-4 mb-4">
        <div className="col">
          {/* =================My Queue=========================== */}
          <h1 id="myqueue">My Queue</h1>
        </div>
      </div>
      {queue.length === 0 ? (
        <span className="no-queue"> 🤔 No Queued Books</span>
      ) : (
        <div className="row">
          <>
            {queue.map((book, index) => (
              <div
                key={index}
                className="image-container d-flex justify-content-start m-3"
              >
                <img
                  onClick={() => handleBooksDetails(book.isbns[0].isbn13)}
                  className="image"
                  src={book.book_image}
                  alt="book"
                ></img>
                <div className="overlay d-flex align-items-center justify-content-center"></div>
              </div>
            ))}
          </>
        </div>
      )}
      {/* =================Featured=========================== */}
      <div className="row d-flex align-items-center mt-4 mb-4">
        <div className="col">
          <h1>Featured</h1>
        </div>
      </div>
      <div className="row">
        <>
          {books.map((book, index) => (
            <div
              key={index}
              className="image-container d-flex justify-content-start m-3"
            >
              <img
                onClick={() => handleBooksDetails(book.isbns[0].isbn13)}
                className="image"
                src={book.book_image}
                alt="book"
              ></img>
              <div
                className="overlay d-flex align-items-center
                justify-content-center"
              ></div>
            </div>
          ))}
        </>
      </div>

      {/* =================Book Series=========================== */}

      <div className="row d-flex align-items-center mt-4 mb-4">
        <div className="col">
          <h1>Book Series</h1>
        </div>
      </div>
      <div className="row">
        <>
          {bookSeries.map((book, index) => (
            <div
              key={index}
              className="image-container d-flex justify-content-start m-3"
            >
              <img
                src={book.book_image}
                alt="book"
                onClick={() => handleSeriesDetails(book.isbns[0].isbn13)}
              ></img>
              <div className="overlay d-flex align-items-center justify-content-center"></div>
            </div>
          ))}
        </>
      </div>

      {/* =================All Books Modal=========================== */}
      {booksDetails ? (
        <div className="detail-modal">
          {books
            .filter((book) => book.isbns[0].isbn13 === bookId)
            .map((book) => {
              return (
                <div key={book.id} className="selected__book-details">
                  <img
                    className="image"
                    src={`${book.book_image}`}
                    alt={book.title}
                  />
                  <div className="selected__book-text">
                    <span className="selected__book-title">{book.title}</span>
                    <span className="selected__book-author">{book.author}</span>

                    <span className="selected__book-rank">
                      Ranking: NYT #{book.rank}
                    </span>
                    <span className="selected__book-author">
                      Weeks on List: {book.weeks_on_list}
                    </span>
                    <span className="selected__book-desc">
                      {book.description}
                    </span>
                    <a
                      href={book.amazon_product_url}
                      target="_"
                      className="selected__book-author"
                    >
                      {" "}
                      Buy Here
                    </a>
                    {isInQueue ? (
                      <button className="button" onClick={deleteFromQueue}>
                        Del from Queue
                      </button>
                    ) : (
                      <button className="button" onClick={addToQueue}>
                        Add to My Queue
                      </button>
                    )}
                  </div>
                  <span
                    onClick={() => closeDetails()}
                    className="selected__book-button"
                  >
                    Close
                  </span>
                </div>
              );
            })}
        </div>
      ) : (
        ""
      )}

      {/* =================Series Only Modal=========================== */}

      {seriesDetails ? (
        <div className="detail-modal">
          {bookSeries
            .filter((book) => book.isbns[0].isbn13 === bookId)
            .map((book) => {
              return (
                <div key={book.id} className="selected__book-details">
                  <img
                    className="image"
                    src={`${book.book_image}`}
                    alt={book.title}
                  />
                  <div className="selected__book-text">
                    <span className="selected__book-title">{book.title}</span>
                    <span className="selected__book-author">{book.author}</span>

                    <span className="selected__book-rank">
                      Ranking: NYT #{book.rank}
                    </span>
                    <span className="selected__book-author">
                      Weeks on List: {book.weeks_on_list}
                    </span>
                    <span className="selected__book-desc">
                      {book.description}
                    </span>
                    <a
                      href={book.amazon_product_url}
                      target="_"
                      className="selected__book-author"
                    >
                      {" "}
                      Buy Here
                    </a>
                    {isInQueue ? (
                      <button className="button" onClick={deleteFromQueue}>
                        Del from Queue
                      </button>
                    ) : (
                      <button className="button" onClick={addToQueue}>
                        Add to My Queue
                      </button>
                    )}
                  </div>
                  <span
                    onClick={() => closeDetails()}
                    className="selected__book-button"
                  >
                    Close
                  </span>
                </div>
              );
            })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MyBooksPage;
