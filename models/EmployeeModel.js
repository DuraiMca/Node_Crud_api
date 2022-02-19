const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/ibc-Emp').catch((e)=>{
    console.log("Error"+e)
})

const employee=mongoose.model("EmployeeDetails",{
    name:{
        type:String,
      
    },
    age:{
        type:Number,
       
    },
    degree:{
         type:String,
         
    },
    skills:[{
        type:String
    }],
    experience:{
        type:Number
    },
    address:{
        type:String
    }
})

module.exports=employee
