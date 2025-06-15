const express = require('express');
const router = express.Router();
const {
  getExpenses,
  addExpense,
  deleteExpense,
} = require('../controllers/expenseController');
const authMiddleware = require('../Middleware/authMiddleware');

router.use(authMiddleware);
router.get('/', getExpenses);
router.post('/', addExpense);
router.delete('/:id', deleteExpense);
module.exports = router;