const mongoose = require("mongoose");
const connection =  mongoose.connect("mongodb+srv://angad:12345@cluster0.x0gsy.mongodb.net/mychat?retryWrites=true&w=majority",
{ useNewUrlParser: true, useCreateIndex:true}).then(()=>{
    console.log("DB Connected")
}).catch(err => {
    console.log(err);
})
mongoose.set('useCreateIndex', true);

module.exports = [].concat(connection);
