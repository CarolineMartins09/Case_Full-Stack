import { DataBasedata } from "./DataBasedata";

export class ProductDatabase extends DataBasedata{
    TABLE_NAME = "Case_Products"

    public async getProducts(){
        return super.getAll()
    }

}
























    // public async getAllProducts(item:number, id: number){
    //     await super.allGet(item, id);
        
    // }