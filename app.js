const express = require('express');
const app = express();
const port = 3000;

//app.get('/', (req, res) => res.send('hello world'));
app.get('/', (req, res) => {
  res.send(`
      <html>
       <head>
         <title>My site</title>
       </head>
       <body>
         <h1>Hello World</h1>
       </body>
      </html>
    `);
});

app.get('/kittens', (req, res, next) => {
  res.send(`
        <html>
         <head>
           <title>My site</title>
         </head>
         <body>
           <h1>You typed kittens</h1>
         </body>
        </html>
      `);
});

app.get('/:stuff', (req, res, next) => {
  res.send(`
          <html>
           <head>
             <title>My site</title>
           </head>
           <body>
             <h1>You typed ${req.params.stuff}</h1>
           </body>
          </html>
        `);
});

app.listen(port, () => console.log(`Listening on port ${port}.`));
