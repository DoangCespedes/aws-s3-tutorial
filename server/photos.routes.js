const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => res.send('Welcome to server'))

router.post('/upload', (req, res) => {
    
    console.log(req.files)
    
    res.send('subio el archivo')

})
module.exports = router 