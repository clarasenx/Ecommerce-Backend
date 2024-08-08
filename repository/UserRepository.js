import BaseRepository from "./BaseRepository.js";

class UserRepository extends BaseRepository {
  async getAll() {
    try {
      const results = await super.getAll("users", [
        "id",
        "name",
        "surname",
        "email",
      ]);
      return results;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      const result = await super.getById("users",[
        "id",
        "name",
        "size",
        "price_in_cents",
      ], id);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

export default UserRepository;
