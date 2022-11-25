import { Catalog } from "../../Core/Catalog/Catalog";
import {v4 as uuidv4} from 'uuid';
import { OrderItem } from "./OrderItem";
import Discount from "./Discount";

export class Order {
    private id:string;
    private userId:string;
    private orderNumber:number;
    private customer:number;
    private orderItems : (OrderItem)[];
    private discount:Discount;
    private total : number;
    
    constructor(
        userId:string, 
        orderNumber:number, 
        customer:number, 
        orderItems:OrderItem[],
        discoount:Discount,
        total:number
        ) {
        this.orderItems = orderItems;
        this.id = uuidv4();
        this.orderNumber = orderNumber;
        this.total = total;
        this.userId = userId;
        this.customer = customer;
        this.discount = discoount;
    }

    get Items():(OrderItem)[] {
        return this.orderItems;
    }

    get OrderNumber():number {
        return this.orderNumber;
    }
    
    get CustomerNumber():number {
        return this.customer;
    }

    get Id():string {
        return this.id;
    }

    get UserId():string {
        return this.userId;
    }

    get Total():number {
        return this.total;
    }

    get Discount():Discount {
        return this.discount;
    }
}