import express from 'express'
import routes from './routes/index'

const app = express()
const portNum = 3000

app.listen(portNum, () => {
   console.log(`Server is Running at Port ${portNum} ...`)
})

app.use('/images', routes)
app.use('*', (req: express.Request, res: express.Response) => {
   res.send("This Route Doen't Exist :(...")
})

export default app
