import { db } from "../connections";

export const getCountries = async () => {
    return await db.query('select * from Country');
};

export const getCountryById = async (id: number) => {
    return await db.any('select * from country where id = $1', [id])
};

