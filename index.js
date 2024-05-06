import express from 'express'
import userRouter from './src/routes/userRoute.js' 

// crear server 
const app = express()

app.use('/auth' , userRouter)

// carpeta Publica 
app.use(express.static('./public'))

// definir un puerto para el servidor o app

const port = 3000

// iniciar el servuidor 
app.listen( port , () => {
    console.log(`el servidor esta funcionando en el puerto : ${port}`);
})
