import express from 'express'
import mongoose from 'mongoose'

const app = express()
app.use(express.json())

const PORT = process.env.PORT ? Number(process.env.PORT) : 8000
const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/octofit_db'

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

async function start() {
  try {
    await mongoose.connect(MONGO_URL)
    console.log('Connected to MongoDB')
  } catch (err) {
    console.error('MongoDB connection error:', err)
  }

  app.listen(PORT, () => {
    console.log(`Octofit backend listening on port ${PORT}`)
  })
}

start()

