import express from 'express'
import userRouter from './src/routes/userRoute.js' 

// crear server 
const app = express()



// carpeta Publica 
app.use(express.static('./public'))

app.set('view engine' ,  'ejs')
app.set('views' , './src/views')

app.use('/auth' , userRouter)

// definir un puerto para el servidor o app

const port = 3000

// iniciar el servuidor 
app.listen( port , () => {
    console.log(`el servidor esta funcionando en el puerto : ${port}`);
})