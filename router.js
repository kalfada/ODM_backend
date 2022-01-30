const users = require('./controllers/userController')

module.exports = app => {
    app.get('/users', async (req, res) => {
        try {
            res.send(await users.read())
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),
    app.get('/users/:id', async (req, res) => {
        try {
            res.send(await users.readOne(req.params))
        } catch (err) {
            res.send({ code: 400, message: err.message || err })
        }
    }),
        app.post('/users', async (req, res) => {
            try {
                res.send(await users.create(req.body))
            } catch (err) {
                res.send({ code: 400, message: err.message || err })
            }
        }),
        app.put('/users/:id', async (req, res) => {
            try {
                res.send(await users.update(req.params, req.body))
            } catch (err) {
                res.send({ code: 400, message: err.message || err })
            }
        }),
        app.delete('/users/:id', async (req, res) => {
            try {
                res.send(await users.delete(req.params))
            } catch (err) {
                res.send({ code: 400, message: err.message || err })
            }
        })
}
