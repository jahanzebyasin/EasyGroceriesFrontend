import { CatalogType } from "./CatalogType";
export class Catalog {
    private id:string;
    private name:string;
    private description:string;
    private quantity:number;
    private type:CatalogType;
    private price:number;

    constructor(
        id:string,
         name:string, 
         description:string,
         quantity:number,
         type:CatalogType,
         price:number
         ) {
            
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.type = type;
        this.id = id;
        this.price = price;
      }

      get Name():string {
        return this.name;
      }
      
      get Description():string {
        return this.description;
      }

      get Quantity():number {
        return this.quantity;
      }

      get Type():CatalogType {
        return this.type;
      }

      get Id():string {
        return this.id;
      }

      get Price():number {
        return this.price;
      }

}
