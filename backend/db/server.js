// const { connect } = require("http2");
const mongoose= require("mongoose");

const db="mongodb+srv://root:root@cluster0.3mzwldy.mongodb.net/complaint?retryWrites=true&w=majority"
mongoose.connect(db,{
    
    useNewUrlParser:true,
    useUnifiedTopology:true

}).then(()=>{
    console.log("connect")
}).catch((error)=>console.log(error.message));