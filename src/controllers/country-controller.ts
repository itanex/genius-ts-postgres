import express, { Request, Response } from 'express';
import * as countryService from '../services/country-service'


const router = express.Router();

const getCountries = async (req: Request, res: Response) => {
    countryService
        .getCountries()
        .then(
            (countries) => {
                res.send(countries);
            }
        )
};

const getCountryById = async (req: Request, res: Response) => {
    countryService
        .getCountryById(parseInt(req.params.id))
        .then(
            (country) => {
                res.send(country);
            }
        )
};

router.get('/countries', getCountries);
router.get('/countries/:id', getCountryById);

export default router;
