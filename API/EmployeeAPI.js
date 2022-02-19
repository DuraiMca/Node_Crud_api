const express=require('express')
const Employee=require('../models/EmployeeModel')
const router=express.Router()
const app=express()
app.use(express.json())
app.use(router)


router.post('/create_emp',(req,res)=>{
    const employee= new Employee(req.body)
    employee.save().then(()=>{
        res.status(201).send(employee)
    }).catch(()=>{
        res.status(400).send("Item not created")
    })
     

})

router.get('/employee_details',async (req,res)=>{
    try{
    const getUser= await Employee.find({Employee})
    res.send(getUser)
    }catch(e){
         res.status(400).send("Unavailable")

    }

})

router.get('/employee_details/:id',async (req,res)=>{
    try{
    const getUser= await Employee.findById(req.params.id)
    res.send(getUser)
    }catch(e){
         res.status(400).send("Unavailable")

    }

})

module.exports=app