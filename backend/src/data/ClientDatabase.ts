import { DataBasedata } from "./DataBasedata";


export class ClientDatabase extends DataBasedata {
    TABLE_NAME = "Case_Clients"

    public async create(client: any) {
        await super.create(client)
    }

    public async allClients() {
        return super.getAll()
    }
}