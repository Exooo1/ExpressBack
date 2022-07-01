import {Router} from 'express'

export const apiVhost = Router()

apiVhost.get('/', (req, res) => {
    res.send('Hello this is api my own site')
})
apiVhost.get('/doc', (req, res) => {
    res.json({data: [{name: 'vlas'}]})
})