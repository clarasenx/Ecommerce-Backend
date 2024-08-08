import pool from "./db.js";

class BaseRepository {
  async getAll(table, columnsArray) {
    try {
      const results = (
        await pool.query(`SELECT ${columnsArray.join()} FROM ${table}`)
      ).rows;
      return results;
    } catch (error) {
      throw error;
    }
  }

  async getById(table, columnsArray, id) {
    try {
      const queryText = `SELECT ${columnsArray.join()} FROM ${table} WHERE id = $1`;
      const result = (await pool.query(queryText, [id])).rows[0];
      return result;
    } catch (error) {
      throw error;
    }
  }

  async insertOne(table, columnsArray, valuesArray) {
    try {
      let flagsString= '';
      for (let i = 1; i < columnsArray.length; i++) {
        flagsString += `$${i},`
      }
      flagsString += `$${columnsArray.length}`
    } catch (error) {
      throw error;
    }
  }
}

export default BaseRepository;
