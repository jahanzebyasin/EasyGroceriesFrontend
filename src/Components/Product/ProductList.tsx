import React from "react";
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
            {products.map((item:Catalog) => <Product key={item.Id} product={item}></Product>)}
        </div>
    );
}

export default ProductList;