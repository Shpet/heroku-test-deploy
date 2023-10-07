import express, { Request, Response } from 'express'
const app = express()

const port = process.env.PORT || 3000
let message = 123

app.get('/', (req: Request, res: Response) => {
  res.send(message.toFixed())
})

app.post('/post', (req: Request, res: Response) => {
  console.log(123)

  message = Math.random() * 100
})

app.listen(port, () => {
  console.log(`Приклад застосунку, який прослуховує ${port} порт!`)
})
