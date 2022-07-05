import "../../components/EReader/EReader.scss";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Component } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

class Reader extends Component {
  //   state = {
  //     error: "",
  //     success: false,
  //   };

  render() {
    return (
      <div className="reader-wrapper">
        <h1 className="reader-title"> The Great Gatsby </h1>
        <div className="reader-hamburger">
          <div className="reader-content"></div>
        </div>
        <div className="audio-player"></div>
        <div id="reader" class="gradient"></div>
      </div>
    );
  }
}
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

export default Reader;
