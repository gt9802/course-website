const express = require('express');
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');

const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


app.use("/admin", adminRouter);
app.use("/user", userRouter);

mongoose.connect('mongodb+srv://thomilangrg:3BgsxMD7LOg8LqOw@cluster0.u1lvsy5.mongodb.net/courses',{dbName: 'courses'});


app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
