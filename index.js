const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const session = require('express-session');
const bcrypt = require('bcrypt');

const port = 5000; //it is 5000 because react is 3000 by default


app.listen(port, () => console.log(`Server started on PORT ${port}`));