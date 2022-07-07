import "../../components/EReader/EReader.scss";
import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import NotebookPage from "../../pages/NotebookPage/NotebookPage";
import PageNav from "../pageNav/pageNav";
import DarkMode from "../DarkMode";

const BookViewer = () => {
  const iframeLink =
    "https://books.google.com/books?id=iXn5U2IzVH0C&lpg=PP1&pg=PP1&output=embed";

  return (
    <>
      <PageNav className="page-nav" />'
      {/* <div handleToggleDarkMode={setDarkMode}> */}
      <div className="reader-page">
        <div className="player-container">
          <iframe
            className="book-iframe"
            frameBorder="0"
            scrolling="no"
            src={iframeLink}
          ></iframe>
          {/* <iframe
            width="1086"
            height="480"
            src="https://www.youtube.com/embed/ZjHl5TyWMsQ"
            title="THE GREAT GATSBY - F. Scott Fitzgerald [FULL AUDIOBOOK] CREATORS MIND"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe> */}
          <video
            className="audio-player"
            controls="controls"
            autoplay=""
            name="media"
            data-video="0"
            src="https://rr1---sn-qxo7rn7k.googlevideo.com/videoplayback?expire=1657176856&ei=uC7GYs-xE5D1hgbVh4P4AQ&ip=192.241.112.82&id=o-AJwA_9ByfLhwsyvc_DymAfexY5GHUQCbaHRfGZMeZ2RD&itag=140&source=youtube&requiressl=yes&spc=lT-Khlu4XZyniTxwF4a0LxFSTDtqdxI&vprv=1&mime=audio%2Fmp4&ns=01QSLVUufsJrJBbnIGhxysMH&gir=yes&clen=267107757&dur=16504.510&lmt=1645791401606461&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=5432434&n=s0WB7HykiHxns4GX6&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIhAIzsjMDxxQtAWLxHLgif99h4Z15g4lV55GDDg9_9yp1qAiBCZxW4SxyoI7ywxIXlRl5QOHNS4eKSdEo9v9o1r6WjSg%3D%3D&redirect_counter=1&rm=sn-ab5eey7e&req_id=ff0a2a8c140ba3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=IA&mip=2601:281:cf7f:3df0:504c:d3cd:f5c4:393b&mm=31&mn=sn-qxo7rn7k&ms=au&mt=1657154268&mv=u&mvi=1&pl=50&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAMkjMQ5foz2d0zWIYh9bRbS2QNsDpSW6oMUamGi9_OK_AiEAisTmIKgDmXuLpBaVDiMlZcx8inRBOBEV72Ybe53MaQo%3D"
            type="audio/mp4"
          ></video>
        </div>
      </div>
      <NotebookPage />
    </>
  );
};

//to scroll:
//divide 100% by the length of the audio
//==>animation that scrolls which takes at

//   render() {
//     return (
//       <div className="reader-wrapper">
//         <h1 className="reader-title"> The Great Gatsby </h1>
//         <div className="reader-hamburger">
//           <div className="reader-content">
//             <h2>The Great Gatsby</h2>
//             <h3>F Scott Fitzgerald</h3>
//             <p className="gatsbytext">
//               `In my younger and more vulnerable years my father gave me some
//               advice that I've been turning over in my mind ever since.{" "}
//               <br></br>
//               <br></br>
//               "Whenever you feel like criticizing any one," he told me, "just
//               remember that all the people in this world haven't had the
//               advantages that you've had." <br></br> <br></br>
//               He didn't say any more but we've always been unusually
//               communicative in a reserved way, and I understood that he meant a
//               great deal more than that. In consequence I'm inclined to reserve
//               all judgments, a habit that has opened up many curious natures to
//               me and also made me the victim of not a few veteran bores. The
//               abnormal mind is quick to detect and attach itself to this quality
//               when it appears in a normal person, and so it came about that in
//               college I was unjustly accused of being a politician, because I
//               was privy to the secret griefs of wild, unknown men. Most of the
//               confidences were unsought--frequently I have feigned sleep,
//               preoccupation, or a hostile levity when I realized by some
//               unmistakable sign that an intimate revelation was quivering on the
//               horizon--for the intimate revelations of young men or at least the
//               terms in which they express them are usually plagiaristic and
//               marred by obvious suppressions. Reserving judgments is a matter of
//               infinite hope. I am still a little afraid of missing something if
//               I forget that, as my father snobbishly suggested, and I snobbishly
//               repeat, a sense of the fundamental decencies is parcelled out
//               unequally at birth.`
//             </p>
//           </div>
//         </div>
//         <div className="audio-player"></div>
//         <div id="reader" class="gradient"></div>
//       </div>
//     );
//   }
// }
// let currentTime = new Date().getHours();
// if (7 <= currentTime && currentTime < 18) {
//   let colors = new Array(
//     [9, 20, 57],
//     [75, 121, 207],
//     [9, 20, 57],
//     [75, 121, 207],
//     [9, 20, 57],
//     [75, 121, 207]
//   );
// } else {
//   let colors = new Array(
//     [75, 197, 207],
//     [75, 121, 207],
//     [75, 197, 207],
//     [75, 121, 207],
//     [75, 197, 207],
//     [75, 121, 207]
//   );
// }

// let step = 0;
// //color table indices for:
// // current color left
// // next color left
// // current color right
// // next color right
// let colorIndices = [0, 1, 2, 3];

// //transition speed
// let gradientSpeed = 0.0005;

// function updateGradient() {
//   if ($ === undefined) return;

//   let c0_0 = colors[colorIndices[0]];
//   let c0_1 = colors[colorIndices[1]];
//   let c1_0 = colors[colorIndices[2]];
//   let c1_1 = colors[colorIndices[3]];

//   let istep = 1 - step;
//   let r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
//   let g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
//   let b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
//   let color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

//   let r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
//   let g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
//   let b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
//   let color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

//   $(".gradient")
//     .css({
//       background:
//         "-webkit-gradient(linear, center top, center bottom, from(" +
//         color1 +
//         "), to(" +
//         color2 +
//         "))",
//     })
//     .css({
//       background:
//         "-moz-linear-gradient(1deg, " + color1 + " 0%, " + color2 + " 100%)",
//     });

//   step += gradientSpeed;
//   if (step >= 1) {
//     step %= 1;
//     colorIndices[0] = colorIndices[1];
//     colorIndices[2] = colorIndices[3];

//     //pick two new target color indices
//     //do not pick the same as the current one
//     colorIndices[1] =
//       (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) %
//       colors.length;
//     colorIndices[3] =
//       (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) %
//       colors.length;
//   }
// }

// setInterval(updateGradient, 10);

export default BookViewer;
