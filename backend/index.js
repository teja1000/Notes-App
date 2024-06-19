const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const SignupRoute = require('./routes/SignupRoute');
const SigninRoute = require('./routes/SigninRoute');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use(session({
  secret: process.env.SESSION_SECRET || 'your_secret_key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, 
  }
}));

app.use('/signup', SignupRoute);
app.use('/signin', SigninRoute);

app.post('/sign-out', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error logging out' });
    }
    res.clearCookie('connect.sid');
    res.status(200).json({ message: 'Sign-out successful' });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
