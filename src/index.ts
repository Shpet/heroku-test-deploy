import express, { Request, Response } from 'express'
const app = express()

let message = 12

app.get('/', (req: Request, res: Response) => {
  res.send(message.toFixed())
})

app.post('/post', (req: Request, res: Response) => {
  console.log(123)

  message = Math.random() * 100
})

app.listen(2000, () => {
  console.log('Приклад застосунку, який прослуховує 2000-ий порт!')
})
