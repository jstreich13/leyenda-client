import { useState, useEffect } from "react";
import axios from "axios";
import "./SingleBook.scss";
import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import React from "react";

const SingleBook = ({ book }) => {
  const [show, setShow] = useState(false);
  const [setItem] = useState();
  console.log(book);

  //   const [movies, setMovies] = useState([
  //     volumeInfo: {
  //     title: "THE GREAT GATSBY",
  //     authors: ["F. SCOTT FITZGERALD"],
  //     imageLinks: {
  //         thumbnail: "http://books.google.com/books/content?id=ki80EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  //         },
  //         volumeInfo: {
  //             title": "The Hobbit",
  //             authors":
  //             "J.R.R. Tolkien",
  //             imageLinks: {
  //             thumbnail: "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  //             }]);

  return (
    <div>
      {book?.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail != undefined && amount != undefined) {
          return (
            <>
              <div
                className="card"
                onClick={() => {
                  setShow(true);
                  setItem(item);
                }}
              >
                <img src={thumbnail} alt="" />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="amount">&#8377;{amount}</p>
                </div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
};

//   <h1>Pure CSS Netflix Video Carousel</h1>

//   <p>
//     Inspired by  <a href="https://twitter.com/Eli_White">Eli White's</a> article <a href="http://eng.wealthfront.com/2015/06/implementing-netflix-redesign.html">Performant CSS Animations: Netflix Case Study</a>, his <a href="https://codepen.io/TheSavior/pen/LVeYBp">example pen</a>, and <a href="http://matthewjamestaylor.com/">Matt Taylor's</a> <a href="https://codepen.io/mattjamestaylor/pen/dodYPr">CSS-only version.</a>
//   </p>

//   <div class="row">
//     <div class="row__inner">

//       <div class="tile">
//         <div class="tile__media">
//           <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg" alt=""  />
//         </div>
//         <div class="tile__details">
//           <div class="tile__title">
//             Top Gear
//           </div>
//         </div>
//       </div>

//       <div class="tile">
//         <div class="tile__media">
//           <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-2.jpg" alt=""  />
//         </div>
//         <div class="tile__details">
//           <div class="tile__title">
//             Top Gear
//           </div>
//         </div>
//       </div>

//       <div class="tile">
//         <div class="tile__media">
//           <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-3.jpg" alt=""  />
//         </div>
//         <div class="tile__details">
//           <div class="tile__title">
//             Top Gear
//           </div>
//         </div>
//       </div>

//       <div class="tile">
//         <div class="tile__media">
//           <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-4.jpg" alt=""  />
//         </div>
//         <div class="tile__details">
//           <div class="tile__title">
//             Top Gear
//           </div>
//         </div>
//       </div>

//       <div class="tile">
//         <div class="tile__media">
//           <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-5.jpg" alt=""  />
//         </div>
//         <div class="tile__details">
//           <div class="tile__title">
//             Top Gear
//           </div>
//         </div>
//       </div>

//       <div class="tile">
//         <div class="tile__media">
//           <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-6.jpg" alt=""  />
//         </div>
//         <div class="tile__details">
//           <div class="tile__title">
//             Top Gear
//           </div>
//         </div>
//       </div>

//       <div class="tile">
//         <div class="tile__media">
//           <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-7.jpg" alt=""  />
//         </div>
//         <div class="tile__details">
//           <div class="tile__title">
//             Top Gear
//           </div>
//         </div>
//       </div>

//       <div class="tile">
//         <div class="tile__media">
//           <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-8.jpg" alt=""  />
//         </div>
//         <div class="tile__details">
//           <div class="tile__title">
//             Top Gear
//           </div>
//         </div>
//       </div>

//       <div class="tile">
//         <div class="tile__media">
//           <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-9.jpg" alt=""  />
//         </div>
//         <div class="tile__details">
//           <div class="tile__title">
//             Top Gear
//           </div>
//         </div>
//       </div>

//       <div class="tile">
//         <div class="tile__media">
//           <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-10.jpg" alt=""  />
//         </div>
//         <div class="tile__details">
//           <div class="tile__title">
//             Top Gear
//           </div>
//         </div>
//       </div>

//       <div class="tile">
//         <div class="tile__media">
//           <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-11.jpg" alt=""  />
//         </div>
//         <div class="tile__details">
//           <div class="tile__title">
//             Top Gear
//           </div>
//         </div>
//       </div>

//       <div class="tile">
//         <div class="tile__media">
//           <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-12.jpg" alt=""  />
//         </div>
//         <div class="tile__details">
//           <div class="tile__title">
//             Top Gear
//           </div>
//         </div>
//       </div>

//       <div class="tile">
//         <div class="tile__media">
//           <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-13.jpg" alt=""  />
//         </div>
//         <div class="tile__details">
//           <div class="tile__title">
//             Top Gear
//           </div>
//         </div>
//       </div>

//       <div class="tile">
//         <div class="tile__media">
//           <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-14.jpg" alt=""  />
//         </div>
//         <div class="tile__details">
//           <div class="tile__title">
//             Top Gear
//           </div>
//         </div>
//       </div>

//       <div class="tile">
//         <div class="tile__media">
//           <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-15.jpg" alt=""  />
//         </div>
//         <div class="tile__details">
//           <div class="tile__title">
//             Top Gear
//           </div>
//         </div>
//       </div>

//       <div class="tile">
//         <div class="tile__media">
//           <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-16.jpg" alt=""  />
//         </div>
//         <div class="tile__details">
//           <div class="tile__title">
//             Top Gear
//           </div>
//         </div>
//       </div>

//       <div class="tile">
//         <div class="tile__media">
//           <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-17.jpg" alt=""  />
//         </div>
//         <div class="tile__details">
//           <div class="tile__title">
//             Top Gear
//           </div>
//         </div>
//       </div>

//       <div class="tile">
//         <div class="tile__media">
//           <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-18.jpg" alt=""  />
//         </div>
//         <div class="tile__details">
//           <div class="tile__title">
//             Top Gear
//           </div>
//         </div>
//       </div>

//       <div class="tile">
//         <div class="tile__media">
//           <img class="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-19.jpg" alt=""  />
//         </div>
//         <div class="tile__details">
//           <div class="tile__title">
//             Top Gear
//           </div>
//         </div>
//       </div>

//     </div>
//   </div>

// </div>

export default SingleBook;
