import { Request, Response } from "express";
import { ClientDatabase } from "../data/ClientDatabase";

export const getAllClients = async (req: Request, resp: Response) => {
    let errorCode = 400
    try {
        const allClients = new ClientDatabase()

        const result = await allClients.allClients()

        resp.status(200).send(result)

    } catch (error: any) {
        resp.status(errorCode).send({ message: error.message });
    }
}