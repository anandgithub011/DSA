let totalSeat = 8;
let seatNum = 66;

if (seatNum >= 1 && seatNum <= 80) {
  if (seatNum % totalSeat === 0 || seatNum % totalSeat === 5) {
    console.log("Upper Birth");
  } else if (seatNum % totalSeat === 3 || seatNum % totalSeat === 6) {
    console.log("Lower Birth");
  } else if (seatNum % totalSeat === 4 || seatNum % totalSeat === 7) {
    console.log("Middle Birth");
  } else if (seatNum % totalSeat === 1) {
    console.log("Side Lower");
  } else if (seatNum % totalSeat === 2) {
    console.log("Side Upper");
  }
} else {
  console.log("Invalid Seat number!!!!");
}


// let checkSeatPosition = (seatNum,totalSeat) =>{

//     if (seatNum >= 1 && seatNum <= 80) {
//         if (seatNum % totalSeat === 0 || seatNum % totalSeat === 5) {
//           console.log("Upper Birth");
//         } else if (seatNum % totalSeat === 3 || seatNum % totalSeat === 6) {
//           console.log("Lower Birth");
//         } else if (seatNum % totalSeat === 4 || seatNum % totalSeat === 7) {
//           console.log("Middle Birth");
//         } else if (seatNum % totalSeat === 1) {
//           console.log("Side Lower");
//         } else if (seatNum % totalSeat === 2) {
//           console.log("Side Upper");
//         }
//       } else {
//         console.log("Invalid Seat number!!!!");
//       }

// }

// checkSeatPosition(79,8);