const express = require('express')

const app = express()
const port = process.env.PORT || 3333

app.use(express.json())

app.get ('/health', (request, response) => {
    return response.json({
        status: 'ok',
        service: 'routine-manager-api',
    })
})

app.listen(port, () => {
    console.log('API running at http://localhost:3333/health}')
})