const prompt = require('prompt');
const data = require('./data.json');

prompt.start();

const q = data.map(item => item.question);

prompt.get(q, function (err, result) {
  const keys = Object.keys(result);
  keys.forEach(key => {
    const res = result[key];
    const answer = data.find(item => item.question === key).response;

    if (res.toLowerCase() === answer.toLowerCase()) {
      console.log('Yeah, you will have some cheese at the raclette party!');
    } else {
      console.log('You are a bad follower, you are not invited anymore!');
    }
  });
})
