import { AppDataSource } from "../../config/database";
import { ProductEntity } from "../../entities/ProductEntity";

class ProductService {
  async getList() {
    const query = AppDataSource.getRepository(ProductEntity)
      .createQueryBuilder("product")
      .select([
        "product.id as id",
        "product.name as name",
        "product.price = price",
        "product.description = description",
      ])
      .where("product.is_active");

    return await query.getRawMany();
  }
}

const productService = new ProductService();

export default productService;
