import {Request, Response, Router} from 'express'
import {userModel} from './userScheme';

export const userRouter = Router()
const response = (errors: string, items: any[]) => {
    return {
        errors, items, resultCode: Math.ceil(Math.random())
    }
}

userRouter.get('/user(name)?', async (req: Request, res: Response,) => {
    try {
        const result = await userModel.find()
        res.json(response('', result))
    } catch (err) {
        res.status(404).json({error: err})
    }
})

userRouter.post('/user', async (req: Request, res: Response) => {
    try {
        const user = new userModel(req.body);
        await user.save();
        res.json(user);
    } catch (err) {
        res.status(400).json({error: err})
    }
});

userRouter.get('/user/:id', async (req: Request<{ id: string }>, res: Response) => {
    try {
        const user = await userModel.findOne({_id: req.params.id})
        res.send(`Hmm, we found the user,This is ${user}`)
    } catch (err) {
        res.status(404).json({error: 'Not found bro'})
    }
})

console.log('s')

userRouter.put('/user/:id', async (req: Request, res: Response) => {
    try {
        const result = await userModel.findOneAndUpdate({_id: req.params.id}, {...req.body})
        res.json(`${result}`)
    } catch (err) {
        res.status(404).json({error: err})
    }
})
userRouter.delete('/user/:id', async (req: Request, res: Response) => {
    try {
        const result = await userModel.deleteOne({_id: req.params.id})
        res.json(result)
    } catch (err) {
        res.status(404).json({error: err})
    }
})
userRouter.get('/zalaa+n?', function (req, res) {
    res.send('khaaan');
});
