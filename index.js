const express = require('express')
const app = express();
const cors = require('cors');
require('dotenv').config()
const port = process.env.PORT || 5000;

// middleWare
app.use(cors());


app.get('/', (req, res) => {
  res.send('Doctors portal server side')
})

app.listen(port, () => {
  console.log(`listening at ${port}`)
})