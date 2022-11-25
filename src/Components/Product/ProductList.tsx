import React from "react";
import { Row } from "react-bootstrap";
import {Api} from '../../Services/Domain/Core/Catalog/Api';
import { Catalog } from "../../Services/Domain/Core/Catalog/Catalog";
import Product from "./Product";

const ProductList: React.FC =  () => {

  const [products, setProducts] = React.useState<Catalog[]>([]);
    
  const catalogApi = new Api();
    React.useEffect(() => {
    //fetch the data from catalog service
        catalogApi.getCatalogList().then((products:Catalog[]) => {
            setProducts(products);
        });
     },[]);
    return (
        <div className="Product-container">
            <Row xs={1} md={4} className="g-4">
                {products.map((item:Catalog) => <Product key={item.Id} product={item}></Product>)}
            </Row>
        </div>
    );
}

export default ProductList;