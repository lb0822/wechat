const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('怎么回事')
})

const port = process.env.PORT || 80
app.listen(port, () => {
  console.log('服务启动成功，端口：', port)
})