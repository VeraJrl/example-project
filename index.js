const express = require('express');
const app = express();
const port = 3000;
console.log("Kajtazi");
console.log("Kajtazi branch")
console.log('Bardhi');
const _ = require('lodash');
console.log("Lorik")
app.get('/', (req, res) => {
//   const arrayRange = _.range(1, 5);
//   res.send(`my Array: ${arrayRange}`);
    res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
console.log("A.KADRIU")
  console.log('ez for me');
