import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct, Product } from '../models/product';
import { max } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products:Array<Product> =  [
    {  id:1,
       nameFirstName: 'Olusola',
       nameLastName: 'Alade',
       address: 'Ajah, lagos',
       phoneNumber: '+234812784659',
        code: 'mp500', 
        category: { name: 'mango', code: '1', category: 1 }, 
        unit: { name: 'PCS', code: '1', category: 0 }, 
        purchaseRate: 100, 
        salesRate: 110 },

        {  id:1,
          nameFirstName: 'Alabi',
          nameLastName: 'James',
          address: 'Lekki, Lagos',
          phoneNumber: '+23480946785',
           code: 'mp500', 
           category: { name: 'orabge', code: '1', category: 1 }, 
           unit: { name: 'PCS', code: '1', category: 0 }, 
           purchaseRate: 100, 
           salesRate: 110 },

           {  id:1,
            nameFirstName: 'Ibukun',
            nameLastName: 'Ademuyiwa',
            address: 'Vitoria Island, Lagos',
            phoneNumber: 'Eastern Mango pickle 500g',
             code: 'mp500', 
             category: { name: 'mango', code: '1', category: 1 }, 
             unit: { name: 'PCS', code: '1', category: 0 }, 
             purchaseRate: 100, 
             salesRate: 110 },

];

  constructor() { }

  getAllProducts():Observable<IProduct[]>{
    return of(this.products)
  }

  getProductById(id:number):Observable<IProduct>{
    var product = this.products.find(item => item.id === id);
    return of(product);
  }

  addNewProduct(product:IProduct):void{
    this.products.sort(item => item.id)
    product.id = this.products.length + 1
    this.products.push(product);
  }

  deleteProduct(product:IProduct):IProduct[]{
    const index = this.products.findIndex(item => item.id === product.id);
    const deletedItem = this.products.splice(index,1);

    return deletedItem;
  }

  updateProduct(product:IProduct):void{

    const index = this.products.findIndex(item => item.id === product.id);
    this.products[index] = product;
  }

}
