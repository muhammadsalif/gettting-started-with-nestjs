import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
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
    const productGenerated = this.productService.insertProduct(productTitle, description, price);
    return productGenerated;
  }

  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: number) {
    return this.productService.getProduct(id);
  }

  @Patch(":id")
  updateProduct(
    @Param("id") id: number,
    @Body("price") price: number,
    @Body("description") description: string,
    @Body("title") title: string
  ) {
    return this.productService.updateProduct(id, price, description, title);
  }
}