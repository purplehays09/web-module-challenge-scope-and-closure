// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 *     Counter 1 returns the function and not the variable and assigns that function to 'counter 1', thus it can be reused and iterated upon later. Counter 2 just returns the value of the count variable. 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter 1 uses a closure since it is returning a function and updating a variable
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * Counter 1 would be better if you want to reuse the function and continually update the variable in later uses. Counte two is stagnant and is only good to update the variable so if you wanted to only update the variable in a one-off situation with no plans to reuse, counter 2 is probably better.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

const inning = function(){

  return Math.floor(Math.random() * 3);

}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

const finalScore = function(func,num){

  let score = {
    "Home": 0,
    "Away":0
  };

  for (let i = 0; i < num; i++){
    score.Home += func();
    score.Away += func();
  }

  return score;

}

console.log(finalScore(inning,9));



/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(funcInning,funcScore,num) {
  let total = {
    "Home":0,
    "Away":0
  };

  for(let i = 1; i <= num;i++){
    let score = funcScore(funcInning,1);
    total.Home += score.Home;
    total.Away += score.Away;
    console.log(`Inning ${i}: Home Score = ${score.Home} Away Score is ${score.Away}`);
  }
  return `Final Score: Home = ${total.Home} Away = ${total.Away}`;
}

console.log(scoreboard(inning,finalScore,9));

