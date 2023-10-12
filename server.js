const fs=require('fs')
const express=require('express')
const MainFile=fs.readFileSync(`${__dirname}/index.html`,'utf-8')
const Card=fs.readFileSync(`${__dirname}/Student_Card.html`,'utf-8')
const Student_Info=fs.readFileSync(`${__dirname}/student_Info.html`,'utf-8')
const Data=JSON.parse(fs.readFileSync(`${__dirname}/Obj.json`,'utf-8'))
const app=express()
const ReplaceTemp=(Product,El)=>{
    let output=Product.replace(/{Id}/g,El.Id)
    output=output.replace(/{Name}/g,El.Name)
    output=output.replace(/{Age}/g,El.Age)
    output=output.replace(/{Job}/g,El.JOB)
    output=output.replace(/{Futute_Job}/g,El.Futute_Job)
    output=output.replace(/{College}/g,El.Collage)
    return output
}
app.get('/Student_Page',(req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'})
    const Card_Info=Data.map(el=>ReplaceTemp(Card,el)).join('')
    const Student_Card=MainFile.replace('{Student_Card}',Card_Info)
    res.end(Student_Card)
})
app.get('/Card',(req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'})
})
app.get('/Info',(req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'})
    // res.end(Student_Info)
    const Student_Data=ReplaceTemp(Student_Info,Data[req.query.Id],)
    res.end(Student_Data)
})
app.listen(8000,'127.0.0.1',()=>{
    console.log('Listening To The Consolw')
})