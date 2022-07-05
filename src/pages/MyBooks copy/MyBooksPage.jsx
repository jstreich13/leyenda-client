import react, { useState } from "react";
import "./MyBooksPage.scss";
import axios from "axios";
import SingleBook from "../../components/SingleBook/SingleBook";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const API_KEY = "AIzaSyD5kOGQwJnb8BECAUybmJ5uU59__bRVcSg";
const API_STRING = "https://www.googleapis.com/books/v1/volumes?q=";

const MyBooksPage = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (event) => {
    if (event.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "AIzaSyD5kOGQwJnb8BECAUybmJ5uU59__bRVcSg" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>Currently reading</h1>
        </div>
        <div className="row1">
          <h1>Queue</h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Find Your Book"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook}
            />
            <button>
              <FontAwesomeIcon icon={faSearch} className="search-icons" />
            </button>
          </div>
          <img src="./images/bg2.png" alt="" />
        </div>
      </div>
      <div className="container">
        <SingleBook book={bookData} />
      </div>
    </>
  );
};
export default MyBooksPage;
