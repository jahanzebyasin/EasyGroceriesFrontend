import React from "react";
import { useCartContext } from "../../Context/CartContext";
import * as _ from "lodash";
import { Badge, Button, ListGroup, Modal } from "react-bootstrap";
import CheckoutItems from "./CheckoutItems";
import { Catalog } from "../../Services/Domain/Core/Catalog/Catalog";
import Utility from "../../Common/Functions/Utility";
import { OrderItem } from "../../Services/Domain/Support/Order/OrderItem";
import {v4 as uuidv4} from 'uuid';
import { Order } from "../../Services/Domain/Support/Order/Order";
import {Api as OrderApi}  from "../../Services/Domain/Support/Order/Api";


const Checkout:React.FC = () => {
    const {
      getAllProducts,
      getTotalAmount,
      getProductCount,
      addLoyalityMembership,
      hasLoyalityProduct,
      getProductCountById,
      resetCart
    } = useCartContext();
    const [hasProds, setHasProds] = React.useState<boolean>(false);
    const [totalAmount, setTotalAmount] = React.useState<number>(getTotalAmount());
    const [loyaltiyProd, setLoyalityProd] = React.useState<Catalog>();
    const [showLoyaltiyProd, setShowLoyalityProd] = React.useState<boolean>(true);
    const [show, setShow] = React.useState(false);


    const handleClose = () => {
      resetCart();
      setShow(false);
    };
    const handleShow = () => setShow(true);
    React.useEffect(() => {
        if(getProductCount() > 0) setHasProds(true);
    },[]);

    React.useEffect(() => {
        if(loyaltiyProd && loyaltiyProd.Id != null) {
            setShowLoyalityProd(false);
        }
    },[loyaltiyProd]);

    function processOrder():boolean {
      let orderItems:OrderItem[] =  _.uniq(getAllProducts()).map((item) => {
          return new OrderItem(
              uuidv4(),
              item,
              getProductCountById(item.Id)
          );
      });
      let order:Order = new Order(
          uuidv4(),
          854124,
          35496,
          orderItems,
          getTotalAmount()
          );

      //lets make the api call
      const api = new OrderApi();
      api.postOrder(order).then((resp:boolean) => {
          if(resp)handleShow();
      }).catch((err:Error) => {
        alert(err.message);
      });

      return false;
  }

    return (
      <>
      <ListGroup >
       {_.uniq(getAllProducts()).map((prod) => <CheckoutItems product={prod} key={prod.Id} />)}
       {getProductCount() && (hasLoyalityProduct() == false) ? <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">loyalty membership 
            <Button 
            onClick={() => {
                setLoyalityProd(addLoyalityMembership());
            }} 
            size="sm" variant="outline-primary">+ Add</Button></div>
            loyalty membership will provide <strong>20% discount</strong> on each purchased item.
          </div>
          <strong>1</strong>
          &nbsp;x&nbsp;
          <span>&#163;</span>
          5.00
        </ListGroup.Item>: ''}
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold"></div>
          </div>
          <strong>Total</strong>
          &nbsp;
          <span>&#163;</span>
          {Utility.formatCurrency(getTotalAmount())}
        </ListGroup.Item>

        {getProductCount() > 0 ? <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold"></div>
          </div>
          <strong></strong>
          &nbsp;
          <Button 
          onClick={() => {
            processOrder();
          }} 
          variant="primary" size="sm">Complete Order</Button>
        </ListGroup.Item>:''}
      </ListGroup>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
  <Modal.Title>Order</Modal.Title>
</Modal.Header>
<Modal.Body>Purchase Order Placed.</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Close
  </Button>
</Modal.Footer>
</Modal>
</>
    );
}
export default Checkout;