import { Url, UrlObject } from "url";
import fetch from "node-fetch";
import { Catalog } from "../../Core/Catalog/Catalog";
import { CatalogType } from "../../Core/Catalog/CatalogType";
import EndPoints from "../../../../Common/Config/Endpoints";
import { Order } from "./Order";

export class Api {
    async request<TResponse>(url: string, config?: any): Promise<TResponse> {
        const response = await fetch(url, config);
        console.log(response);
        if(!response.ok) {
            console.log(__filename,"Network Error");
            throw("Network Error");
        }
        return await response.json();
    }

    async getOrderList():Promise<Catalog[]> {
        try {
            const data = await this.request<any>(EndPoints.ORDER_BASE_URL);
            let catalogList: Catalog[] = [];
            catalogList = data.map((item:any, index:number) => {
                return new Catalog(item.id, item.name , item.description, item.quantity, CatalogType.Tangable, item.price);
            });
            return catalogList;
        } catch (error) {
            throw(error);
        }
    }

    async postOrder(order:Order):Promise<boolean> {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(order)
            };
            const data = await this.request<any>(EndPoints.ORDER_BASE_URL, requestOptions);
            return true;
        } catch (error) {
            throw(error);
        }
    }
}