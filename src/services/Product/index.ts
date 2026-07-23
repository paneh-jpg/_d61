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

  async create(product: any) {
    const query = AppDataSource.getRepository(ProductEntity)
      .createQueryBuilder("product")
      .insert()
      .into(ProductEntity)
      .values([product])
      .returning(["id", "name"]);

    return await query.execute();
  }

  async updateById(id: string, product: any) {
    const query: any = AppDataSource.getRepository(ProductEntity)
      .createQueryBuilder("product")
      .update(ProductEntity)
      .set(product)
      .where("product.id = :id", { id })
      .returning(["id", "name"]);

    return await query.execute();
  }

  async deleteById(id: string) {
    const result = await AppDataSource.getRepository(ProductEntity)
      .createQueryBuilder("product")
      .update(ProductEntity)
      .set({
        isActive: false,
      })
      .where("product.id = :id", { id })
      .returning(["id", "name", "isActive"])
      .execute();

    return result.raw[0];
  }
}

const productService = new ProductService();

export default productService;
