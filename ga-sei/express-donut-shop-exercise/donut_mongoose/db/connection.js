// requirements: import mongoose
const mongoose = require('mongoose');

// Connect to a local database called "the-donut-shop"
// When it connects, then console.log "Connected to MongoDB"
mongoose.connect('mongoose://localhost/the-donut-shop').then(() => {
    console.log('connected to mongo db')
});


// export your mongoose connection
modules.export = mongoose;