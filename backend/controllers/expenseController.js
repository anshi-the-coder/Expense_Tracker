const Expense = require('../models/Expense');

exports.getExpenses = async (req, res) => {
  const expenses = await Expense.find({ userId: req.user.userId });
  res.json(expenses);
};

exports.addExpense = async (req, res) => {
  const expense = new Expense({ ...req.body, userId: req.user.userId });
  await expense.save();
  res.status(201).json(expense);
};

exports.deleteExpense = async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.status(204).send();
};