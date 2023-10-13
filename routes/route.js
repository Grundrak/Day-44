const express = require ('express');
const router = express.Router();
const Product = require('../models/product');


router.get('/', async (req,res) =>{
    try{
    const Products = await Product.find();
    res.json(Products);
    }catch(err){
    res.status(500).json({ error: 'An error occurred while fetching data.' });
    }})

// router.get("/search", async (req, res) => {
//     const {maxPrice, minPrice, name, availability} = req.query
  
//     try {
//       const query = {};
  
//         // if(availability!== undefined) {
//         //         query.availability = {}
//         // }
  
//       if (name) {
//         query.name = { $regex: new RegExp(searchquery, "i") };
//       }else  if (minPrice !== undefined && maxPrice !== undefined) {
//         query.price = { $gte: minPrice, $lte: maxPrice };
//       } else if (minPrice !== undefined) {
//         query.price = { $gte: minPrice };
//       } else if (maxPrice !== undefined) {
//         query.price = { $lte: maxPrice };
//       }
//       const products = await Product.find(query);
//       res.render('search', { products });
//     } catch (err) {
//       res.status(500).send('Error fetching data from Mngdb');
//     }
//   });
  

module.exports = router ;