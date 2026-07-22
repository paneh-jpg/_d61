import { AppDataSource } from "../../config/database";
import { CustomerEntity } from "../../entities/CustomerEntity";
class CustomerService {
  private repository = AppDataSource.getRepository(CustomerEntity);
  async getList() {
    const query = AppDataSource.getRepository(CustomerEntity)
      .createQueryBuilder("customer")
      .select()
      .where("customer.is_active");

    return await query.getMany();
  }

  async create(data: Partial<CustomerEntity>) {
    const newCustomer = this.repository.create(data);
    return await this.repository.save(newCustomer);
  }

  async updateById(id: string, customer: any) {
    const query: any = AppDataSource.getRepository(CustomerEntity)
      .createQueryBuilder("customer")
      .update(CustomerEntity)
      .set(customer)
      .where("customer.id = :id", { id })
      .returning(["id", "name"]);

    return await query.execute();
  }

  async deleteById(id: string) {
    const result = await AppDataSource.getRepository(CustomerEntity)
      .createQueryBuilder("customer")
      .update(CustomerEntity)
      .set({
        isActive: false,
      })
      .where("customer.id = :id", { id })
      .returning(["id", "name", "isActive"])
      .execute();

    return result.raw[0];
  }
}

const customerService = new CustomerService();

export default customerService;
