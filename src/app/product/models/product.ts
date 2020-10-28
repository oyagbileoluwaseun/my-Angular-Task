import { Lookup } from './lookup';
export interface IProduct{
    id:number;
    nameFirstName:string;
    nameLastName:string;
    address:string;
    phoneNumber:string;
    code:string;
    category:Lookup;
    unit:Lookup
    salesRate:number;
    purchaseRate:number
}
export class Product {
    id:number;
    nameFirstName:string;
    nameLastName:string;
    address:string;
    phoneNumber:string;
    code:string;
    category:Lookup;
    unit:Lookup
    salesRate:number;
    purchaseRate:number
    constructor(nameFirstName?:string,nameLastName?:string,address?:string,phoneNumber?:string,code?:string,category?:Lookup,unit?:Lookup,salesRate?:number, purchaseRate?:number){
        this.nameFirstName = nameFirstName;
        this.nameLastName = nameLastName;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.code = code;
        this.category = category;
        this.unit = unit;
        this.salesRate = salesRate;
        this.purchaseRate = purchaseRate;
    }
}
