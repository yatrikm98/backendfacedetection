const express=require('express')
// const bodyParser=require('body-parser');
// const bcrypt=require('bcrypt-nodejs')
// const cors=require('cors')
// const knex = require('knex')
// const register=require('./controllers/register.js')
// const signin=require('./controllers/signin.js')
// const profile=require('./controllers/profile.js')
// const image=require('./controllers/image.js')

// const db =knex({
//     client: 'pg',
//     connection: {
//       connectionString: 'postgres://postgresql_pgadmin_a7g9_user:Vwe52tRVD2FctkMvdD884Eg3pAsOr0nr@dpg-cgiqr4hr8t1g7lran5i0-a/postgresql_pgadmin_a7g9',
//     ssl: {rejectUnauthorized: false},
//       host : 'dpg-cgiqr4hr8t1g7lran5i0-a.oregon-postgres.render.com',
//       port : 5432,
//       user : 'postgresql_pgadmin_a7g9_user',
//       password : 'Vwe52tRVD2FctkMvdD884Eg3pAsOr0nr',
//       database : 'postgresql_pgadmin_a7g9'
//     }
//   });

// const app = express();
// app.use(cors())
// app.use(bodyParser.json())


// app.get('/',(req,res)=>{
// res.send("Hello")
// })
// app.post('/signin',(req,res)=>signin.handleSignin(req,res,db,bcrypt))
// app.post('/register',(req,res)=>register.handleRegister(req,res,db,bcrypt))
// app.get('/profile/:id',(req,res)=>profile.handleProfileGet(req,res,db))
// app.put('/image',(req,res)=>image.handleImage(req,res,db))
// app.post('/imageurl',(req,res)=>image.handleApiCall(req,res))


app.listen(process.env.PORT || 3000,()=>{
    console.log(`App is running on port ${process.env.PORT}`)
})
