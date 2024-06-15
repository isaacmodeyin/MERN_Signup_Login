const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Employee");

const PORT = 3001;

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB using either option (localhost or loopback address)
mongoose.connect("mongodb://127.0.0.1:27017/employee"); // or mongodb://127.0.0.1:27017/

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});

app.post("/register", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

// Start the server and listen on port 3001
app.listen(PORT, (err) => {
  console.log(`Server is running on port ${PORT}`);
});
