import express from 'express'
import controller from '../controllers/home-controller'
import countryController from '../controllers/country-controller';

const router = express.Router();

// router.get('/home', controller.getHome);
// router.get('/countries', countryController.getCountries);

export = router;
