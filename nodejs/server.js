const express = require('express')
const app = express()
const mongoose = require('mongoose');

const port = 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))



async function main() {
    try {
        await mongoose.connect('mongodb+srv://smtpb8:dLRMBHAW7y1Nxhyj@cluster0.umlgkew.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Connected to MongoDB successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit the process if connection fails
        
    }
  
}

main()


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

let products = []


// app.use((req, res, next) => {
//     next(); // call the next middleware or route handler
// })

// create route for body parameters
app.get('/', (req, res) => {
    try {
        // res.sendFile(__dirname + '/index.html')
        res.download(__dirname + '/index.html') // to download the file
        // res.render('index.html', { title: 'Express App' })
        // res.status(200).json({
        //     status: 'success',
        //     message: '',
        //     data: [
        //         { id: 1, name: 'Product A', price: 100 },
        //         { id: 2, name: 'Product B', price: 150 },
        //     ]
        // })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
            data: []
        })
    }

}
)

// serve static files from the "public" directory
app.use('/uploads', express.static('uploads'))
app.use('/build', express.static('build'))


// pass image file using multer
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // specify the directory to save uploaded files
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.mimetype.split('/')[1])
    }
})

const upload = multer({ storage: storage })// route to upload an image file
app.post('/upload', upload.single('image'), (req, res) => {
    console.log('Image file uploaded:', req.file);
    // cloundary 
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    // Simulate saving the file information to the database
    res.json({ message: 'File uploaded successfully', file: req.file });
}
)

app.post('/create/products', async (req, res) => {
    try {
        console.log('Creating a new product...', req.body);
        // validate product schema
        const product_data = new Product(req.body);
        const result = await product_data.save();
        res.status(201).json({
            status: 'success',
            message: 'Product created successfully',
            data: result
        })


    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
            data: []
        })
    }

}
)

// update product details
app.put('/update/products/:id', async(req, res) => {
    try {
        const productId = req.params.id;
        if (!productId) {
            return res.status(400).json({ error: 'Product ID is required in path params' });
        }
        // find product by id and update
        const updatedProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true, runValidators: true });
        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json({
            status: 'success',
            message: 'Product updated successfully',
            data: updatedProduct
        })      
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
            data: []
        });
    }
})

// middleware to log request details


app.get("/search_products", async (req, res) => {
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
})
app.get('/products', async (req, res) => {
   try {
    const products = await Product.find();
    res.status(200).json({
        status: 'success',
        message: 'Products fetched successfully',
        data: products
    })
    
   } catch (error) {
    res.json({
        status: 'error',
        message: error.message,
        data: []
    })
   }
  
})

app.post('/products', (req, res) => {
    console.log('Adding a new product...', req.body);
    // Simulate adding a product to the database
    res.json([
        { id: 1, name: 'Product A', price: 100 },
        { id: 2, name: 'Product B', price: 150 },
        { id: 3, name: 'Product C', price: 200 }
    ])
}
)


app.get('/products/:abc/:xyz/:hard', (req, res) => {
    const productId = req.params.abc;
    const xyz = req.params.xyz;
    const hard = req.params.hard;
    const userName = req.query.username;
    const email = req.query.email;
    if (!productId) {
        return res.status(400).json({ error: 'Product ID is required in path params' });
    }

    if (!userName) {
        return res.status(400).json({ error: 'username is required in query params ' });
    }
    console.log(`Fetching product with ID: ${productId} and xyz: ${xyz}`);
    console.log(`Updating product with ID: ${productId}`);
    // Simulate updating a product in the database
    res.json({ id: productId, name: 'Updated Product', price: 250 })
}
)
app.delete('/products/:id', async(req, res) => {
   
  try {
    
     const productId = req.params.id;
    // delete by object id
    if (!productId) {
        return res.status(400).json({ error: 'Product ID is required in path params' });
    }
    const result = await Product.findByIdAndDelete(productId);
    if (!result) {
        return res.status(404).json({ error: 'Product not found' });
    }
    res.status(200).json({
        status: 'success',
        message: 'Product deleted successfully',
        data: result
    })
  } catch (error) {
    res.status(500).json({
        status: 'error',
        message: error.message,
        data: []
    })
    
  }
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
}
)