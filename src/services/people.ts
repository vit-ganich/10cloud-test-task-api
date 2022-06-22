import axios from "axios";

import { BASE_URL } from "../axios.config";
import GetPeople from "../models/people/get";

/**
 * People endpoint
 */
class People {
  /**
   * Get a user by id
   * @param id
   * @returns
   */
  async getById(id: number): Promise<GetPeople> {
    const url = `${BASE_URL}/people/${id}/`;
    const request = await axios.get(url);

    return request.data as GetPeople;
  }
}

export default new People();
