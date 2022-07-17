import { BadRequestException, Injectable } from "@nestjs/common";
import { NotFoundError } from "rxjs";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
  products: Product[] = [];
  count = 0;

  insertProduct(title: string, description: string, price: number) {
    this.count += 1;
    const newProduct = new Product(this.count, title, description, price);
    this.products.push(newProduct);
    return newProduct;
  }

  getAllProducts() {
    return [...this.products];
  }

  getProduct(id: number) {
    const product = this.products.find((eachProduct) => eachProduct.id == id)
    if (!product) {
      throw new BadRequestException('Not found')
    }
    return { ...product };
  }

  updateProduct(id: number, price: number, description: string, title: string) {
    const product = this.products.find((eachProduct) => eachProduct.id == id);
    const index = this.products.findIndex((eachProduct) => eachProduct.id == id);
    if (!product) {
      throw new BadRequestException('Not found')
    }
    this.products[index] = { ...product, price: price ?? product.price, description: description ?? product.description, title: title ?? product.title };
    return this.products[index];
  }

}