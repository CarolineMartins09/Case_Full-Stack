import { Request, Response } from "express";
import { ProductDatabase } from "../data/ProductDatabase";

export const getAllProducts = async (req: Request, resp: Response) => {
    let errorCode = 400

    try {
        const products = new ProductDatabase()

        const result = await products.getProducts()

        resp.status(200).send(result)
    } catch (error: any) {
        resp.status(errorCode).send({ message: error.message })
    }
}