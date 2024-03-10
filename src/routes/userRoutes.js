import * as express from 'express';
import { getUsers, postUsers } from "../controller/users.js";

const router = express.Router()

router.get('/users', async (req, res) => {
    await getUsers(req, res)
})

router.post('/users', async (req, res) => {
    await postUsers(req, res)
})

export default router;