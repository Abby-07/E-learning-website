const mongoose=require("mongoose")
// mongoose.connect("mongodb+srv://abhavyabajaj:86CqUYra6ICzHzpd@cluster0.sbzj6hb.mongodb.net/")
mongoose.connect("mongodb+srv://abhavyabajaj:nVmNBmQuqcatN9ve@abhavya.s3ruuy0.mongodb.net/")
// mongodb+srv://abhavyabajajece22:<password>@abhavya.opyhuyx.mongodb.net/
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    // name:{
    //     type:String,
    //     required:true
    // },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    // age:{
    //     type:String,
    //     required:true
    // },
    // college:{
    //     type:String,
    //     required:true
    // },
    // branch:{
    //     type:String,
    //     required:true
    // },
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection
