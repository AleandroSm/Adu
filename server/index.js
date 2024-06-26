import express from 'express'
import cors from 'cors'
import {PORT} from './config.js'
import cuidadesRoutes from './routes/cuidades.routes.js'
import autobusesRoutes from './routes/autobuses.routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(cuidadesRoutes)
app.use(autobusesRoutes)

app.listen(PORT)

console.log(`app listening in port: ${PORT}`)