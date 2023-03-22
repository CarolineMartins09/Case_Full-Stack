import { Request, Response } from "express";
import connection from "../data/migration/connection";
import { OrderDatabases } from "../data/OrderDataBase";
import { ProductDatabase } from "../data/ProductDatabase";
import { TProduct } from "../models/Products";

export const createOrder =
    async (req: Request, res: Response) => {
        let errorCode = 400;

        try {
            const delivery_date = req.body.delivery_date;
            const fk_client = req.body.fk_client;
            const products: TProduct[] = req.body.products;


            if (!delivery_date || !products || !fk_client) {
                throw new Error("Body invalido!")
            }

            const idsProducts = products.map((product) =>
                product.id
            )

            const stockProducts = await connection.select("qty_stock")
                .from("Case_Products")
                .whereIn('id', idsProducts)

            for (let i = 0; i < products.length; i++) {
                if (products[i].qty > stockProducts[i].qty_stock) {
                    throw new Error('Estoque indisponivel')
                }
            }

            const order = new OrderDatabases()

            await products.forEach(async product => {

                await order.create(
                    {
                        order_data: new Date().toISOString().slice(0, 10),
                        delivery_date,
                        qty: product.qty,
                        fk_client,
                        fk_product: product.id
                    })

                const getStock = await connection.select("qty_stock")
                    .from("Case_Products")
                    .where({ id: product.id })


                const stockAtual = Number(getStock[0].qty_stock);

                await connection("Case_Products")
                    .where({ id: product.id })
                    .update({ qty_stock: stockAtual - product.qty })

            })

            res.status(200).send(`Pedido criado com sucesso!!`)

        } catch (error: any) {
            res.status(errorCode).send({ message: error.message });
        }
    }