const express = require('express');
const app = express();
app.use(express.json());

// Function Add
app.get('/add', (req, res) => {
  const { num1, num2 } = req.query;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: "Please press the number you want to add" });
  }
  res.json({ result: Number(num1) + Number(num2) });
});

// Function Subtract
app.get('/subtract', (req, res) => {
  const { num1, num2 } = req.query;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: "Please press the number you want to subtract" });
  }
  res.json({ result: Number(num1) - Number(num2) });
});

// Function Multiply
app.get('/multiply', (req, res) => {
  const { num1, num2 } = req.query;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: "Please press the number you want to multiply" });
  }
  res.json({ result: Number(num1) * Number(num2) });
});

// Function Divide
app.get('/divide', (req, res) => {
  const { num1, num2 } = req.query;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: "Please press the number you want to divide" });
  }
  if (Number(num2) === 0) {
    return res.status(400).json({ error: "Cannot divide by zero" });
  }
  res.json({ result: Number(num1) / Number(num2) });
});

app.listen(8080, () => console.log('Servering on port 8080'));