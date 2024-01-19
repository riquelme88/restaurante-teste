import {Router} from "express";
import * as pageController from '../controllers/PageController'

const router = Router();


router.get('/',pageController.home);
router.get('/breakfast', pageController.breakfast);
router.get('/lunch', pageController.lunch);
router.get('/shakes', pageController.shakes);
router.get('/dinner', pageController.dinner)

export default router















