import React from "react";
import { Button, Stack } from "react-bootstrap";
import Utility from "../../Common/Functions/Utility";
import { useCartContext } from "../../Context/CartContext";
import { Catalog } from "../../Services/Domain/Core/Catalog/Catalog";

const CartItem: React.FC<{product:Catalog}> = ({product}) => {
    const {getProductCountById, removeProduct} = useCartContext();
    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src="images/icons8-open-box-64.png" />
            <Stack direction="horizontal" gap={5}>
               <div>
                  {product.Name}
                  
                </div>
                <div className="ms-auto">
                    
                </div>
                <div className="ms-auto">
                <span className="text-muted"><strong> x  {getProductCountById(product.Id)} </strong> </span>
                <span>&#163;</span>{Utility.formatCurrency(product.Price)}
                    
                </div>
                <Button variant="outline-danger" size="sm" onClick={() => {
                    removeProduct(product);
                }}  >&times;</Button>
             </Stack>
            {/* <div className="me-auto">
                <div>
                    {product.Name}
                </div>
                <div>
                    Qty: {getProductCountById(product.Id)}
                </div>
                <div className="ms-auto">
                    <span>&#163;</span>{product.Price}
                </div>
                
            </div> */}
        </Stack>
    );
}

export default CartItem;