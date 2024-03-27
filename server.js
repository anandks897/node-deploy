const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;

const path = require('path');


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    res.render('home',{
        pageTitle:'Home',
        title:'Home',
        name:'Welcome to this page Aanand'
    })
})
app.get('/page1',(req,res)=>{
    res.render('page1',{
        pageTitle:'Page1',
        title:'Page1',
        name:'Anand'
    })
})
app.get('/page2',(req,res)=>{
    res.render('page2',{
        pageTitle:'Page2',
        title:'Page2',
       name:'This is page 2.'
    })
})
app.get('/page3',(req,res)=>{
    res.render('Page3',{
        pageTitle:'page3',
        title:'Page3',
       name:'This is page 3 of our website.'
    })
})

app.get('/page4',(req,res)=>{
    res.render('page4',{
        pageTitle:'Page4',
        title:'Page4',
       name:'This is page 4'
    })
})

app.get('/page5',(req,res)=>{
    res.render('page5',{
        pageTitle:'Page5',
        title:'Page5',
       name:'This is the page 5.'
    }) 
}) 
   
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
