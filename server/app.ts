import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { expenseRoute } from './routes/expenses'
import { serveStatic } from 'hono/bun'

const app = new Hono()

app.use('*', logger())

app.route("/api/expenses", expenseRoute)


app.use('*', serveStatic({ root: './frontend/dist' }))
app.get('*', serveStatic({ path: './frontend/dist/index.html' }))

export default app  