import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
  products: Product[] = [];
  count = 0;

  insertProduct(title: string, description: string, price: number): number {
    this.count += 1;
    const newProduct = new Product(this.count, title, description, price);
    this.products.push(newProduct);
    return this.count;
  }

}