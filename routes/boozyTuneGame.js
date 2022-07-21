import { Router } from "express";
import * as boozyTuneGameCtrl from '../controllers/boozyTuneGame.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*----------- PUBLIC ROUTES ------------*/




/*----------- PROTECTED ROUTES ------------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, boozyTuneGameCtrl.randomSongAndDrink)


export { router }