import { Catalog } from "../Services/Domain/Core/Catalog/Catalog";

// @types.cart.ts
export interface ICart {
    id:number;
    products:Catalog[] | [];
    totalAmount?:number;
}

export type CartContextType = {
    addProduct:         (product: Catalog) => void;
    removeProduct:      (product: Catalog) => void;
    updateCart:         (product: Catalog) => void;
    getProductCountById: (id:string) => number;
    getProductCount:    () => number;
    getTotalAmount:     () => number;
    handleClose:        () => void;
    handleOpenCart:     () => void;
    enableCheckout:     () => boolean;
    getAllProducts:     () => Catalog[];
    addLoyalityMembership: () => Catalog;
    hasLoyalityProduct: () => boolean;
    // processOrder:       () => boolean;
    resetCart:          () => void;
    removeOneProduct:      (Prod:Catalog)=>void;
    
}