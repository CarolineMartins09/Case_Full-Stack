import { DataBasedata } from "./DataBasedata";


export class ClientDatabase extends DataBasedata {
    TABLE_NAME = "Case_Clients"

    public async create(estudante: any) {
        await super.create(estudante)
    }

    public async allClients() {
        return super.getAll()
    }
}