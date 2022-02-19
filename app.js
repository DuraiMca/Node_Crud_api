const app=require('./API/EmployeeAPI')
const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("Connected => " + PORT)
})