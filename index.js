const express=require('express')
const app =express()
const questions =[
    {
        questions:"how too install python1",
        slugs:"how-to-insatll-python",
        votes:"3",
        views:"18",
        tags:"python1,pip,query"
    },
    {
        questions:"how too install python2",
        slugs:"how-to-insatll-python1",
        votes:"3",
        views:"18",
        tags:"python2,pip,query"
  
    },
    {
        questions:"how too install python1",
        slugs:"how-to-insatll-python2",
        votes:"3",
        views:"18",
        tags:"python1,pip,query"

    }
]
const users =[
    {
    name:"kiranmai",
    followers:"200",
    location:"hyderbad"
    },
    {
        name:"ratna kumari vasthavada",
        followers:"2000",
        location:"akividu"
        },
        {
            name:"haritha",
            followers:"10000",
            location:"kodhada"
            },
            
]


app.get('/',(req,res)=>{
    res.send("Home")

})
app.get('/questions',(req,res)=>{

    res.send(questions)
 
})
app.get('/questions/:slug',(req,res)=>{
    console.log(req.params.slug)
    const slug =req.params.slug
    questions.map(obj=>{
        if (obj.slug=== slug){
            res.send(obj)

        }
    })
    res.send("question not found")

})

app.get('/users',(req,res)=>{
    res.send(users)

})

app.get('/tags',(req,res)=>{
    res.send("tags")

})

app.get('/jobs/companies',(req,res)=>{
    res.send("Companies")

})

app.listen(1234,()=>{
    console.log("listen")
})
