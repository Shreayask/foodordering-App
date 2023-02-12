"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
const { insertPizza, getAllPizza, updatePizza, deletePizza } = require("../controllers/pizzaController");
router.post('/addPizza', insertPizza);
router.get('/getAllPizzas', getAllPizza);
router.post('/updatepizza/', updatePizza);
router.post('/deletepizza', deletePizza);
module.exports = router;
//# sourceMappingURL=pizzaRoute.js.map