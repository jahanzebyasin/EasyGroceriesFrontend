import React, { ReactNode, useContext } from "react";
import { CartContextType, ICart } from "../@types/cart";
import { Cart } from "../Components/Cart/Cart";
import { Catalog } from "../Services/Domain/Core/Catalog/Catalog";
import {v4 as uuidv4} from 'uuid';
import { CatalogType, CatalogTypeDiscountCalculatorDictionary, CatalogTypeDiscountDictionary } from "../Services/Domain/Core/Catalog/CatalogType";
import { Order } from "../Services/Domain/Support/Order/Order";
import { OrderItem } from "../Services/Domain/Support/Order/OrderItem";
import {Api as OrderApi}  from "../Services/Domain/Support/Order/Api";
import * as _ from "lodash";

type CartProviderProps = {
    children: ReactNode
}

const CartContext = React.createContext({} as CartContextType);

export function  useCartContext() {
    return useContext(CartContext);
}

export function CartProvider({children}:CartProviderProps){
    const [cartProducts,setCartProducts] = React.useState<Catalog[]>([]);
    const [openCart,setOpenCart] = React.useState(false);

    function addProduct(newProd:Catalog) {
        setCartProducts((prods) => {
            return [...prods,newProd];
        });
    }

    function removeProduct(prod:Catalog) {
        const updateList = cartProducts.filter((prodItem) => prodItem.Id !== prod.Id );
        setCartProducts(updateList);
    }

    function updateCart() {

    }

    function getProductCount() {
        return cartProducts.length;
    }

    function  getTotalAmount() {
        const totalAmount = cartProducts.reduce((accumulator, prod) => {
                    return accumulator + (CatalogTypeDiscountCalculatorDictionary[prod.Type](prod));
            }, 0);
            return totalAmount;
    }

    function getProductCountById(id:string) {
        const sameProds = cartProducts.filter(item => item.Id === id);
        return sameProds.length;
    }

    function enableCheckout():boolean {
        if(cartProducts.length > 0) return true;
        else return false;
    }

    function getAllProducts():Catalog[] {
        return cartProducts;
    }

    function addLoyalityMembership():Catalog {
        let loyaltyProd = new Catalog(uuidv4(),"Loyality Membership","20% discount",1,CatalogType.LoyalityMembership,5.00); 
        setCartProducts((prods) => {
            return [...prods,loyaltyProd];
        });
        return loyaltyProd;
    }

    function hasLoyalityProduct():boolean {
        const loyalityProd = cartProducts.filter((p) => p.Type == CatalogType.NonTangable );
        return (loyalityProd.length > 0)
    }

    function removeOneProduct(prod:Catalog):void {
        let withoutList = cartProducts.filter((prodItem) => prodItem.Id !== prod.Id );
        let withList = cartProducts.filter((prodItem) => prodItem.Id == prod.Id );
        let oneLessList:Catalog[] = [];
        if(withList.length == 1) {
            withList = [];
        } else {
           oneLessList = withList.splice(0,1);
        }
        setCartProducts((prods) => {
            return [...withoutList,...oneLessList];
        });
    }

    function resetCart() {
        setCartProducts([]);
    }

    const handleClose = () => setOpenCart(false);

    const handleOpenCart = () => setOpenCart(true);

    return (
        <CartContext.Provider value={{
            addProduct, 
            removeProduct, 
            updateCart, 
            getProductCount, 
            getTotalAmount,
            handleClose,
            handleOpenCart,
            getProductCountById,
            enableCheckout,
            getAllProducts,
            addLoyalityMembership,
            hasLoyalityProduct,
            resetCart,
            removeOneProduct
        }} >
            {children}
            <Cart openBasket={openCart} basketProducts={cartProducts}   />
        </CartContext.Provider>
    );
}
