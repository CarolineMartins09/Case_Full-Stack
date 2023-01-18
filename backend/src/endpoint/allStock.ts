import { Request, Response } from "express";
import { StockDatabase } from "../data/StockDatabase";

export const getAllStock = async (req: Request, resp: Response) => {
    let errorCode = 400

    try {

        const stock = new StockDatabase()
        const result = await stock.allStock()

        resp.status(200).send(result)


    } catch (error: any) {
        resp.status(errorCode).send({ message: error.message });
    }
}