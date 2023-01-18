import { Request, Response } from "express";
import { ClientDatabase } from "../data/ClientDatabase";


export const createClient = async (req: Request, resp: Response) => {
    let errorCode = 400

    try {
        const name = req.body.name;
        if (!name) {
            throw new Error("Nome invalido!")
        }
        const clientDatabase = new ClientDatabase()

        const clientName = {
            name
        }

        await clientDatabase.create(clientName)

        resp.status(200).send(`message: cliente cadastrado com sucesso ${name}`)

    } catch (error: any) {
        resp.status(errorCode).send({ message: error.message })
    }
}