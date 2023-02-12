"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const { placeOrder, getUserOrder, getAllUserOrders } = require('../controllers/orderController');
router.post('/placeorder', placeOrder);
router.post('/getuserorder', getUserOrder);
router.get("/alluserorder", getAllUserOrders);
module.exports = router;
//# sourceMappingURL=orderRoute.js.map