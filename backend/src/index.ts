import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { createClient } from "./endpoint/createClient";
import { getAllClients } from "./endpoint/allClients";
import { createOrder } from "./endpoint/createOrder";
import { getAllProducts } from "./endpoint/allProducts";
import { getAllStock } from "./endpoint/allStock";

const app:Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error("failure upon starting server");
    }
})
//Buscar Clients
app.get("/clients", getAllClients)

//BUSCAR PRODUTOS
app.get("/products", getAllProducts)

//BUSCAR STOCK
app.get("/stock", getAllStock)

//ADD CLIENTS
app.post("/clients", createClient)

//Produtos
app.post("/order", createOrder)

