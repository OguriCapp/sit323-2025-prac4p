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

// Function Power
app.get('/power', (req, res) => {
  // num1 = base; num2 = exponent
  const { num1, num2 } = req.query;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: "(num1)base and (num2)exponent should be numbers" });
  }
  res.json({ result: Math.pow(Number(num1), Number(num2)) });
});

// Function Sqrt
app.get('/sqrt', (req, res) => {
  const { num } = req.query;
  if (isNaN(num)) {
    return res.status(400).json({ error: "Please press the number you want to do sqrt" });
  }
  if (Number(num) < 0) {
    return res.status(400).json({ error: "Please input positive numbers, this function can't deal with negative numbers" });
  }
  res.json({ result: Math.sqrt(Number(num)) });
});

// Function Modulo
app.get('/modulo', (req, res) => {
  const { num1, num2 } = req.query;
  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: "BPlease press the number you want to modulo" });
  }
  if (Number(num2) === 0) {
    return res.status(400).json({ error: "Cannot modulo by zero" });
  }
  res.json({ result: Number(num1) % Number(num2) });
});

app.listen(8080, () => console.log('Servering on port 8080'));