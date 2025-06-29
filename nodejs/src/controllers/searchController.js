
const Product = require('../models/productModel'); // Import the Product model

const searchProductController = async (req, res) => {
   try{
    // mongoose query to search products by title or author or email or name
    const { title, author, email, name } = req.query;
    const query = {};
    if (title) {
        query.title = { $regex: title, $options: 'i' }; // case-insensitive search
    }
    if (author) {
        query.author = { $regex: author, $options: 'i' }; // case-insensitive search
    }
    if (email) {
        query.email = { $regex: email, $options: 'i' }; // case-insensitive search
    }
    if (name) {
        query.name = { $regex: name, $options: 'i' }; // case-insensitive search
    }
    // search by price range
    if (req.query.minPrice || req.query.maxPrice) {
        const minPrice = req.query.minPrice ? parseFloat(req.query.minPrice) : 0;
        const maxPrice = req.query.maxPrice ? parseFloat(req.query.maxPrice) : Infinity;
        query.price = { $gte: minPrice, $lte: maxPrice };
    }

    // search by date range
    if (req.query.startDate || req.query.endDate) {
        const startDate = req.query.startDate ? new Date(req.query.startDate) : new Date(0); // default to epoch start if not provided
        const endDate = req.query.endDate ? new Date(req.query.endDate) : new Date(); // default to current date if not provided
        query.date = { $gte: startDate, $lte: endDate };
    }

    // search by hidden status
    if (req.query.hidden) {
        const hidden = req.query.hidden === 'true'; // convert string to boolean
        query.hidden = hidden;
    }
    // search by comments
    if (req.query.comment) {
        query.comments = { $elemMatch: { body: { $regex: req.query.comment, $options: 'i' } } }; // case-insensitive search in comments
    }
    // search by body
    if (req.query.body) {
        query.body = { $regex: req.query.body, $options: 'i' }; // case-insensitive search in body
    }
    // search by exact date
    if (req.query.exactDate) {
        const exactDate = new Date(req.query.exactDate);
        query.date = { $eq: exactDate }; // exact match on date
    }

    const products = await Product.find(query);
    res.status(200).json({
        status: 'success',
        message: 'Products fetched successfully',
        data: products
    });
   }
   catch (error) {
    res.status(500).json({
        status: 'error',
        message: error.message,
        data: [] })
    }
}

module.exports = {
    searchProductController
};