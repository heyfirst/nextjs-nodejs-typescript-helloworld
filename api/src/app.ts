import express from 'express'
import ExpressSession from 'express-session'
import helmet from 'helmet'
import compression from 'compression'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'

const app: express.Application = express()

app.use(helmet())
app.use(compression())
app.use(bodyParser.json())
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'],
  })
)
app.use(morgan('tiny'))
app.disable('x-powered-by')

app.use(
  ExpressSession({
    name: 'express_sid',
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      sameSite: true,
      expires: new Date(Date.now() + 3 * 60 * 60 * 1000), // 3 hour,
    },
  })
)

app.use('/', (req, res) => res.send({ hello: 'world' }))

export default app
