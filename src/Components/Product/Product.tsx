import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { JsxElement } from "typescript";
import Utility from "../../Common/Functions/Utility";
import { useCartContext } from "../../Context/CartContext";
import {Api} from '../../Services/Domain/Core/Catalog/Api';
import { Catalog } from "../../Services/Domain/Core/Catalog/Catalog";
// @ts-ignore
import { run as runHolder } from 'holderjs/holder';

const Product: React.FC<{product:Catalog}> =  (props) => {
    const {product} = props;
    const {addProduct, getProductCountById, removeOneProduct} = useCartContext();
    React.useEffect(() => {
      runHolder('image-class-name');
    },[]);
    return (
        <>
        {/* <div className="card mb-3" style={{maxWidth: "60%"}} >
  <div className="row g-0">
    <div className="col-md-3">
      <img src="images/icons8-open-box-64.png" className="img-fluid rounded-start" style={{marginTop: "30px", marginLeft: "40px"}} alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <div> 
          <h5 className="card-title">{product.Name}</h5>
          <p className="card-text">{product.Description}</p>
          <p className="card-text"><span>&#163;</span>{Utility.formatCurrency(product.Price)}</p>
        </div>
        <div className="me-auto">
          <Button className="outline-primary" onClick={() => {addProduct(product)}} >+</Button>
          &nbsp;
             {getProductCountById(product.Id)}
          &nbsp;
          <Button className="outline-primary" onClick={() => {removeOneProduct(product)}} >-</Button>
        </div>
      </div>
    </div>
  </div>
</div> */}
       <Col>
          <Card>
            <Card.Img className="image-class-name" variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{product.Name}</Card.Title>
              <Card.Text>
              <div> 
                <p>{product.Description}</p>
                <p><span>&#163;</span>{Utility.formatCurrency(product.Price)}</p>
              </div>
              <div className="ms-auto">
                <Button className="outline-primary" onClick={() => {addProduct(product)}} >+</Button>
                &nbsp;
                  {getProductCountById(product.Id)}
                &nbsp;
                <Button className="outline-primary" onClick={() => {removeOneProduct(product)}} >-</Button>
              </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </>
    );
}

export default Product;