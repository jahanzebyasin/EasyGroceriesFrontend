import { IOrderProcessor } from "./IOrderProcessor";
import { Order } from "./Order";

export class OrderProcesor implements IOrderProcessor {
    processOrder(order: Order) {
        return order;
    }

    processDiscount(order: Order) { 
        return order; 
    };
    
}
