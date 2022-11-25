import React from "react";
import { Button, Stack } from "react-bootstrap";
import Utility from "../../Common/Functions/Utility";
import { useCartContext } from "../../Context/CartContext";
import { Catalog } from "../../Services/Domain/Core/Catalog/Catalog";

const CartItem: React.FC<{product:Catalog}> = ({product}) => {
    const {getProductCountById, removeProduct} = useCartContext();
    return (
        <Stack direction="horizontal" gap={3}>
        <div><img src="images/icons8-open-box-64.png" /></div>
        <div>{product.Name}</div>
        <div className="ms-auto">
        <span className="text-muted"><strong> {getProductCountById(product.Id)}</strong> &nbsp; x &nbsp;  </span>
                 <span>&#163;</span>{Utility.formatCurrency(product.Price)}
        </div>
        <div className="bg-light border">
        <Button variant="outline-danger" size="sm" onClick={() => {
                    removeProduct(product);
                }}  >&times;</Button>
        </div>
      </Stack>
    );
}

export default CartItem;