import axios from "axios";

const API_URL =
  "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=yourkey";
const API_KEY = "BGrpPwL1iQMZzZOUAQME3dZVLsAElx2w";

//getting various lists

export const current = [];

export const twentyTen = [];

export const twoThousand = [];

export const nineteenNinety = [];

setTimeout(() => {
  axios
    .get(
      "https://api.nytimes.com/svc/books/v3/lists/current/combined-print-fiction.json?api-key=BGrpPwL1iQMZzZOUAQME3dZVLsAElx2w"
    )
    .then((res) => {
      current.push(res.data);
    });
  axios
    .get(
      "https://api.nytimes.com/svc/books/v3/lists/current/combined-print-nonfiction.json?api-key=BGrpPwL1iQMZzZOUAQME3dZVLsAElx2w"
    )
    .then((res) => {
      current.push(res.data);
    });
}, 400);

// axios
//   .get(
//     "https://api.nytimes.com/svc/books/v3/lists/2010-07-01/combined-print-fiction.json?api-key=BGrpPwL1iQMZzZOUAQME3dZVLsAElx2w"
//   )
//   .then((res) => {
//     twentyTen.push(res.data);
//   });
// axios
//   .get(
//     "https://api.nytimes.com/svc/books/v3/lists/2010-07-01/combined-print-nonfiction.json?api-key=BGrpPwL1iQMZzZOUAQME3dZVLsAElx2w"
//   )
//   .then((res) => {
//     twentyTen.push(res.data);
//   });

// axios
//   .get(
//     "https://api.nytimes.com/svc/books/v3/lists/2000-07-01/combined-print-fiction.json?api-key=BGrpPwL1iQMZzZOUAQME3dZVLsAElx2w"
//   )
//   .then((res) => {
//     twoThousand.push(res.data);
//   });
// axios
//   .get(
//     "https://api.nytimes.com/svc/books/v3/lists/2000-07-01/combined-print-nonfiction.json?api-key=BGrpPwL1iQMZzZOUAQME3dZVLsAElx2w"
//   )
//   .then((res) => {
//     twoThousand.push(res.data);
//   });

// axios
//   .get(
//     "https://api.nytimes.com/svc/books/v3/lists/1990-07-01/combined-print-fiction.json?api-key=BGrpPwL1iQMZzZOUAQME3dZVLsAElx2w"
//   )
//   .then((res) => {
//     nineteenNinety.push(res.data);
//   });
// axios
//   .get(
//     "https://api.nytimes.com/svc/books/v3/lists/1990-07-01/combined-print-nonfiction.json?api-key=BGrpPwL1iQMZzZOUAQME3dZVLsAElx2w"
//   )
//   .then((res) => {
//     nineteenNinety.push(res.data);
//   });

axios
  .get(
    "https://api.nytimes.com/svc/books/v3/lists/current/young-adult-paperback-monthly.json?api-key=BGrpPwL1iQMZzZOUAQME3dZVLsAElx2w"
  )
  .then((res) => {
    current.push(res.data);
  });

axios
  .get(
    "https://api.nytimes.com/svc/books/v3/lists/current/series-books.json?api-key=BGrpPwL1iQMZzZOUAQME3dZVLsAElx2w"
  )
  .then((res) => {
    current.push(res.data);
  });

//business books
axios
  .get(
    "https://api.nytimes.com/svc/books/v3/lists/current/business-books.json?api-key=BGrpPwL1iQMZzZOUAQME3dZVLsAElx2w"
  )
  .then((res) => {
    current.push(res.data);
  });

//audio-fiction
axios
  .get(
    "https://api.nytimes.com/svc/books/v3/lists/current/audio-fiction.json?api-key=BGrpPwL1iQMZzZOUAQME3dZVLsAElx2w"
  )
  .then((res) => {
    current.push(res.data);
  });

axios
  .get(
    "https://api.nytimes.com/svc/books/v3/lists/current/audio-nonfiction.json?api-key=BGrpPwL1iQMZzZOUAQME3dZVLsAElx2w"
  )
  .then((res) => {
    current.push(res.data);
  });
