import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
  constructor(private productService: ProductsService) { }

  @Post()
  addProducts(
    @Body('title') productTitle: string,
    @Body('price') price: number,
    @Body('description') description: string
  ) {
    const generatedId = this.productService.insertProduct(productTitle, description, price);
    return { id: generatedId }
  }

  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }

}