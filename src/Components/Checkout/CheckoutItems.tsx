import React from "react";
import { useCartContext } from "../../Context/CartContext";
import * as _ from "lodash";
import { Badge, ListGroup } from "react-bootstrap";
import { Catalog } from "../../Services/Domain/Core/Catalog/Catalog";
import Utility from "../../Common/Functions/Utility";


const CheckoutItems:React.FC<{product:Catalog}> = ({product}) => {
    const {getAllProducts,getTotalAmount,getProductCount,getProductCountById} = useCartContext();
    return (
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{product.Name}</div>
            {product.Description}
          </div>
          <strong>{getProductCountById(product.Id)}</strong>
          &nbsp;x&nbsp;
          <span>&#163;</span>
          {Utility.formatCurrency(product.Price)}
        </ListGroup.Item>
    );
}
export default CheckoutItems;