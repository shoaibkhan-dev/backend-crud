const express = require('express');

const app = express();
app.use(express.json())


const checkToken = (req,res,next)=>{
    console.log('welcome')
}
app.use(checkToken) // Middleware

app.get('/product', (req, res)=>{
    res.send({
         status:1,
         message: 'Product page Api'})
});

app.get('/news', (req, res)=>{
    res.send({status: 1, message: 'news page api'})
});

app.get('/news/:id', (req, res)=>{
    res.send('news detail page')
})

app.post('/login', (req, res)=>{
    console.log(req.body)
    res.send({
        status:2,
        message: 'login page api'
    })
})

app.listen('8000', ()=>{
    console.log('server running on port 8000');
    
});

// const express=require('express');

// const apps = express();
// apps.use = (express.json())

// apps.get('/login', (req, res)=>{
//     res.send({
//         status: 1,
//         message: 'login page api'
//     })
// });

// apps.post('/product', (req, res)=>{
//     console.log(req.body)
//     res.post({
//         status: 2,
//         message: 'product page api',
//         bodyData: req.body,
//         queryData: ''
//     })
// });

// apps.listen(8000, ()=>{
//     console.log('server running on port 8000');
// });



const express=require('express');


const apps = express();

apps.get('/login', async(req, res)=>{
    res.send({status: 1, message: 'login page api'})
});

apps.get('/news', async(req, res)=>{
    res.send({status: 1, msg: 'news page api'})
});

apps.listen('6000',() =>{
    console.log('port is running on localhost 6000')
});


const express = require('express');

const todosRouter = express.Router();

const port = 5000;

app.listen(port, ()=>{
    console.log('server is up on port 5000');
})