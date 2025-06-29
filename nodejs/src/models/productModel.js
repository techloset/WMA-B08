const mongoose = require('mongoose');

// create schema for products and model
const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        trim: true,
        minlength: [3, 'Title must be at least 3 characters long'],
        maxlength: [100, 'Title must be at most 100 characters long'],
        validate: {
            validator: function(v) {
                return /^[a-zA-Z\s]+$/.test(v);
            },
            message: props => `${props.value} is not a valid title!`
        }
    },
    author: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, 'Author must be at least 3 characters long'],
        maxlength: [50, 'Author must be at most 50 characters long'],
        validate: {
            validator: function(v) {
                return /^[a-zA-Z\s]+$/.test(v);
            },
            message: props => `${props.value} is not a valid author name!`
        }
    },
    body: String,
    comments: [{ body: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, 'Comment must be at least 3 characters long'],
        maxlength: [200, 'Comment must be at most 200 characters long'],
        validate: {
            validator: function(v) {
                return /^[a-zA-Z\s]+$/.test(v);
            },
            message: props => `${props.value} is not a valid comment!`
        }
    }, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: {
        type: Boolean,
        default: false,

    },
    name: { 
        type: String,
        required: true,
        trim: true,
        minlength: [3, 'Name must be at least 3 characters long'],
        maxlength: [50, 'Name must be at most 50 characters long'],
        validate: {
            validator: function(v) {
                return /^[a-zA-Z\s]+$/.test(v);
            },
            message: props => `${props.value} is not a valid name!`
    
    }},
    price: { 
        type: Number,
        required: true,
        min: [0, 'Price must be a positive number'],
        validate: {
            validator: function(v) {
                return v >= 0;
            },
            message: props => `${props.value} is not a valid price!`
        }
    
    },
    email: { 
        type: String, 
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
     }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;