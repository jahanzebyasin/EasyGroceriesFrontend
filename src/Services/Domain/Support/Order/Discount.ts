import { DiscountType } from "./DiscountType";

export default class Discount{
    private type: DiscountType;
    private discountPercentage: number;

    constructor(type:DiscountType, discountPercentage:number) {
        this.type = type;
        this.discountPercentage = discountPercentage
    }

    public get Type(): DiscountType {
        return this.type;
    }
    public set Type(value: DiscountType) {
        this.type = value;
    }
    
    public get DiscountPercentage(): number {
        return this.discountPercentage;
    }
    
    public set DiscountPercentage(value: number) {
        this.discountPercentage = value;
    }


}