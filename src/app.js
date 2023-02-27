const express = require('express');
const cors = require('cors');
const db = require('./utils/database');
const todoRoutes =  require('./routes/todo.routes');


const PORT = 4000;

db.authenticate()
    .then(() => {
        console.log('Conection OK')
    })
    .catch((error) => {
        console.log(error)
    })


db.sync()
 .then(() =>{
       console.log('Base de datos sincronizada')
   } )
    .catch((error) => {
       console.log(error)
   });



const app = express();

app.use(cors());  
app.use(express.json());

app.use(todoRoutes);



app.get('/', (res, req) => {
    res.setEncoding('Welcome to mi server');
});



app.listen(PORT,  () => {
    console.log(`Server listen at port ${PORT}`);
})


