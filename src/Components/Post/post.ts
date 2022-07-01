import {Request, Response, Router} from 'express'
import {postModel} from './postScheme';

export const postRouter = Router()

postRouter.get('/posts', async (req: Request, res: Response) => {
    const result = await postModel.find()
    res.send(result)
})

postRouter.post('/posts', async (req: Request, res: Response) => {
    try {
        const post = new postModel({...req.body, time: new Date()})
        await post.save()
        res.json(post)
    } catch (e) {
        res.status(500).json({error: '_ID is unnecessary here'})
    }
})

postRouter.put('/posts', async (req: Request, res: Response) => {
    const result = await postModel.findOneAndUpdate(req.body._id, {...req.body})
    res.json(result)
})
