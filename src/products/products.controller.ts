import { Body, Controller, Get, Param, Post } from "@nestjs/common";
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

  @Get(':id')
  getProduct(@Param('id') id: number) {
    return this.productService.getProduct(id);
  }

}