import { Catalog } from "../../Core/Catalog/Catalog";
import {v4 as uuidv4} from 'uuid';

export class OrderItem {
    private id:string;
    private item:Catalog;
    private quantity:number;

    get Id():string {
        return this.id;
    }

    get Item():Catalog {
        return this.item;
    }

    get Quantity():number {
        return this.quantity;
    }

    constructor(id:string, item:Catalog, quantity:number) {
        this.id = uuidv4();
        this.item = item;
        this.quantity = quantity;
    }
}