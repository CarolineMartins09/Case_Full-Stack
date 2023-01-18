import { DataBasedata } from "./DataBasedata";

export class OrderDatabases extends DataBasedata {
    TABLE_NAME = "Case_Orders"

    public async create(order: any) {
        await super.create(order);
    }

}