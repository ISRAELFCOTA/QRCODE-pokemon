import axios, { AxiosResponse } from "axios";
import { Response } from "ts-retrofit";

import { PokeDto } from "../Dto/pokemon";

const baseURL = "https://pokeapi.co/api/v2/pokemon/";

class PokeService {
  private axios = axios.create({ baseURL });

  async getPoke(id: number): Promise<Response<PokeDto>> {
    const response: AxiosResponse<PokeDto> = await this.axios.get(`${id}`);

    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
      config: response.config as any,
    };
  }
}

export const pokeService = new PokeService();
