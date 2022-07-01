import {userRouter} from './Components/User/user'
import {postRouter} from './Components/Post/post';
import cors from 'cors'

export const corsConfig=cors({

})

export const arrayRoutes = [userRouter, postRouter]