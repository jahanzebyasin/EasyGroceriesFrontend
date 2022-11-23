import { Order } from "./Order";

export interface IOrderProcessor {
    processOrder: (order:Order) => Order;
    processDiscount: (order: Order) => Order;
} 