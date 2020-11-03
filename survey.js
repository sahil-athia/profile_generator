const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name/nickname? ', (answer) => {
  rl.question('What is an activity you like doing? ', (answer2) => {
    rl.question(`What do you listen to while ${answer2}? `, (answer3) => {
      rl.question('What meal of the day is your favourite? ', (answer4) => {
        rl.question(`What is your favourite thing to eat during ${answer4}? `, (answer5) => {
          rl.question('What sport is your favourite? ', (answer6) => {
            rl.question('What are you very good at? ', (answer7) => {
              console.log(`${answer} loves to listen to ${answer3} while ${answer2},\n devouring ${answer5} during ${answer4}.\n ${answer} will play ${answer6} over any sport, and is amazing at ${answer7}.`)
              rl.close();
            })
          })
        })
      })
    })
  })
});