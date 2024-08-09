import BaseRepository from "./BaseRepository.js";

class ProductRepository extends BaseRepository {
  async getAll() {
    try {
      const results = await super.getAll("products", [
        "id",
        "name",
        "price_in_cents",
        "size",
      ]);
      return results;
    } catch (error) {
      throw error;
    }
  }

  async getById(table, columnsArray, id) {
    try {
      const result = await super.getById("products", [
        "id", 
        "name", 
        "price_in_cents", 
        "size"],
        id
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  async insertOne(valuesArray) {
    try {
      super.insertOne(
        "products",
        ["name", "price_in_cents", "size"],
        valuesArray
      );
    } catch (error) {
      throw error;
    }
  }
}

export default ProductRepository;
