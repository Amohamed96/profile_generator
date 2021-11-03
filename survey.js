const readline = require('readline');
let questions = {
  a: "What do you think of Node.js?",
  b: "What's your name? (Nicknames are also acceptable:)",
  c: "What's an activity you like doing?",
  d: "What do you listen to while doing that?",
  e: "Which meal is your favourite (eg: dinner, brunch, etc.)",
  f: "What's your favourite thing to eat for that meal?",
  g: "Which sport is your absolute favourite?",
  h: "What is your superpower? In a few words, tell us what you are amazing at!"
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(questions.a, (answer) => {
rl.question(questions.b, (answerB) => {
rl.question(questions.c, (answerC) => {
rl.question(questions.d, (answerD) => {
rl.question(questions.e, (answerE) => {
rl.question(questions.f, (answerF) => {
rl.question(questions.g, (answerG) => {
rl.question(questions.h, (answerH) => {
  console.log(`Thank you for your valuable feedback: ${answer} ${answerB} ${answerC}${answerD}${answerE}${answerF}${answerG}${answerH}`);

  rl.close();
});
});
});});});});});});