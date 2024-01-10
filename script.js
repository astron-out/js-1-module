// let js = "amazing";

// if (js === "amazing") alert("JS is FUN!");

// const firstName = "Khudoyberdi";
// const lastName = "Shamsiyev";

// console.log(firstName + " " + lastName);

// Challenge for beginners

// const weightMark = 95;
// const heightMark = 1.88;

// const weightJohn = 85;
// const heightJohn = 1.76;

// let finalResultMark = weightMark / heightMark ** 2;
// let finalResultJohn = weightJohn / heightJohn ** 2;

// let markHigherBmi = finalResultMark > finalResultJohn;

// console.log(
//   `John's result is ${finalResultJohn} and Mark's result is ${finalResultMark}`
// );

// if (markHigherBmi === true) {
//   console.log("Mark's result is higher than John's result");
// } else {
//   console.log("John's result is higher than Mark's result");
// }
// console.log(markHigherBmi);

// const age = 18;
// const oldEnought = age >= 18;

// if (oldEnought) {
//   console.log("You can start driving license");
// } else {
//   console.log("Sorry! But you can't start license");
// }

// const birthDate = 1997;

// let century;
// if (birthDate >= 2000) {
//   century = 21;
// } else {
//   century = 20;
// }
// console.log(century);

// const inputYear = "2007";
// console.log(Number(inputYear) + 18);
// console.log(inputYear + 18);

// let favNumber = Number(prompt("What's your favourite number?"));
// console.log(Number(favNumber));

// if (favNumber === 10) {
//   console.log("Wow! 10 is cool number!");
// } else if (favNumber === 730) {
//   console.log("730 also cool number!");
// } else {
//   console.log(
//     `Cool! ${favNumber} also cool number, but my favourite numbers are 10 and 730`
//   );
// }

// const drivingLicense = false;
// const goodVision = true;
// const isTired = false;
// console.log(drivingLicense && goodVision);
// console.log(drivingLicense || !goodVision);
// console.log(!drivingLicense || !goodVision);
// console.log(!drivingLicense && !goodVision);

// if (drivingLicense && goodVision && !isTired) {
//   console.log(`You can drive a car without a doubt :D`);
// } else if (drivingLicense && !goodVision && !isTired) {
//   console.log(`You should drive a car with eyeglasses!!!`);
// } else if (isTired) {
//   console.log(
//     "You can't drive a car if you tired, give it someone else or drive a car after having a rest!"
//   );
// } else {
//   console.log("You just can't drive a car");
// }

// Calculation and Comparison avarage score of 2 teams

const teamDolphine = (96 + 108 + 89) / 3;
const teamKoalas = (88 + 91 + 110) / 3;
const sameResult = teamDolphine === teamKoalas;

if (teamDolphine > teamKoalas && teamDolphine >= 100) {
  console.log(`Team Dolphine wins this compation with score ${teamDolphine}`);
} else if (teamDolphine > teamKoalas && teamDolphine < 100 && !sameResult) {
  console.log(
    `Both teams can't reach required score! But team Dolphine has greater result than team Kolalas (${teamDolphine})`
  );
} else if (teamDolphine < teamKoalas && teamKoalas < 100 && !sameResult) {
  console.log(
    `Both teams can't reach required score! But team Dolphine has greater result than team Kolalas (${teamDolphine})`
  );
} else if (teamKoalas > teamDolphine && teamKoalas >= 100) {
  console.log(`Team Koalas wins this compation with score ${teamKoalas}`);
} else if (sameResult < 100) {
  console.log(
    `Both teams can't reach required score but they have same results!`
  );
} else {
  console.log(
    `Both teams reached the same result, each reached ${
      (teamDolphine, teamKoalas)
    }`
  );
}

//
