require('./db')

const
    express = require('express')
app = express()
PORT = 3000;
router = require('./router')

app.use(express.json())
app.use(require('cors')())

router(app)

app.listen(process.env.PORT || PORT, () => console.log(`server is running => ${PORT}`))