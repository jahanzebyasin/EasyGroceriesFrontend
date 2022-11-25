import { Url, UrlObject } from "url";
import fetch from "node-fetch";
import { Catalog } from "./Catalog";
import { CatalogType } from "./CatalogType";
import EndPoints from "../../../../Common/Config/Endpoints";
import data from "../../../../Data/Catalog/Catalog.json";

export class Api {
    async request<TResponse>(url: string, config?: any): Promise<TResponse> {
        const response = await fetch(url, config);
        if(!response.ok) {
            console.log(__filename,"Network Error");
            throw("Some Network Error");
        }
        return await response.json();
    }

    async getCatalogList():Promise<Catalog[]> {
        try {
            // const data = await this.request<any>(EndPoints.CATALOG_BASE_URL);
            let catalogList: Catalog[] = [];
            catalogList = data.map((item:any, index:number) => {
                return new Catalog(item.id, item.name , item.description, item.quantity, CatalogType.Tangable, item.price);
            });
            return catalogList;
        } catch (error) {
            throw(error);
        }
    }
}