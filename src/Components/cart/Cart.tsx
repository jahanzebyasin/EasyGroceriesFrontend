import React from "react";
import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useCartContext } from "../../Context/CartContext";
import { Catalog } from "../../Services/Domain/Core/Catalog/Catalog";
import { useNavigate } from 'react-router-dom';
import CartItem from "./CartItem";
import * as _ from "lodash";
import Utility from "../../Common/Functions/Utility";


export const Cart:React.FC<{openBasket:boolean, basketProducts: Catalog[] }> = ({openBasket, basketProducts}) => {
    const {handleClose, handleOpenCart, getTotalAmount, enableCheckout} = useCartContext();
    const navigate = useNavigate();
    return (
        <Offcanvas show={openBasket} onHide={handleClose} placement="end" >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Basket</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack>
                {_.uniq(basketProducts).map((item,index) => <CartItem product={item} key={index} /> )}
            </Stack>
            <Stack>
                <div className="ms-auto" >
                    <strong>Total: </strong><span>&#163;</span> {Utility.formatCurrency(getTotalAmount())}
                </div>
            </Stack>
            <Stack>
                <Button 
                onClick={() => {
                    handleClose();
                    navigate('/checkout');
                }} 
                className='mt-5' 
                disabled={!enableCheckout()} 
                variant="primary" 
                size="lg">
                    Checkout
                </Button>
            </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    );
}
