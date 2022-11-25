import { Catalog } from "./Catalog";

export enum CatalogType {
    Tangable = "Tangable",
    NonTangable = "NonTangable",
    LoyalityMembership = "LoyalityMembership"
}

export const CatalogTypeDiscountDictionary : Record<CatalogType, number> = {
    "Tangable": 1,
    "NonTangable":1,
    "LoyalityMembership" : 0.2 // 20%
};

export const CatalogTypeDiscountCalculatorDictionary : Record<CatalogType, any> = {
    "Tangable": (Catalog:Catalog, discoutPercentage:number = 0):number => Catalog.Price - (Catalog.Price * discoutPercentage) ,
    "NonTangable":(Catalog:Catalog, discoutPercentage:number = 0):number => Catalog.Price - (Catalog.Price * discoutPercentage),
    "LoyalityMembership" : (Catalog:Catalog, discoutPercentage:number = 0):number => (Catalog.Price)
};
