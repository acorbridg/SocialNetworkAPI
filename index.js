const express = require('express')
const db = require ('./config/connection')
const apiRoutes = require('./routes');
const router = express.Router();


const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use("*", (req, res) => res.send('Wrong route!'));



db.once('open', () => {
   app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
  