import BaseRepository from "./BaseRepository.js";

class ProductRepository extends BaseRepository {
  async getAll() {
    try {
      const results = await super.getAll("products");
      return results;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      const result = await super.getById("products", id);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default ProductRepository;
