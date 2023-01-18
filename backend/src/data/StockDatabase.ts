import { DataBasedata } from "./DataBasedata";

export class StockDatabase extends DataBasedata{
    TABLE_NAME= "Case_Products"

    public async allStock(){
        const result = await DataBasedata.connection.raw(`
            SELECT name, qty_stock FROM Case_Products
        `)
        return (result)
    }

}