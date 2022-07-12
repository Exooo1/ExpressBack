import express, {NextFunction, Request, Response} from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {arrayRoutes, corsConfig} from './indexConfig';
import vhost from 'vhost'
import {apiVhost} from './Components/Vhost/vhost';
import multer from 'multer'

const upload = multer({dest: 'uploads/'})


dotenv.config();
const app = express();
const api = express()
app.use(express.json())
// app.use(vhost('api.*', api))
// api.use(apiVhost)
// app.use(corsConfig)
// arrayRoutes.some(item => {
//     app.use(item)
// })
const PORT = process.env.PORT || 3000;
//
// app.post('/profile', upload.single('avatar'), function (req, res, next) {
//     // req.file - файл `avatar`
//     // req.body сохранит текстовые поля, если они будут
//     res.send('')
// })
// console.log('')
// const start = async () => {
//     try {
//         await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useFindAndModify: true})
//         app.use((req: Request, res: Response, next: NextFunction) => {
//             console.log(req.hostname)
//             if (req.hostname !== 'localhost') res.redirect(303, 'http://localhost:8080/')
//             next()
//         })
//         app.get('/', (req: Request, res: Response) => {
//             res.send('This main page in Server!');
//         });
//         app.listen(PORT, () => {
//             console.log('Start is start!');
//         });
//         app.use((req: Request, res: Response) => res.status(500))
//     } catch (err) {
//         throw new Error('Server don\'t work...')
//     }
// }
// start()

app.get('/', (req, res) => {
    res.send('Hello')
})
app.listen(PORT)
