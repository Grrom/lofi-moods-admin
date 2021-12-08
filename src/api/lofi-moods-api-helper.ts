import { apiResponse, music } from "../types/types";

export default class LofiMoodsApiHelper {
  protocol: string = "http";
  host: string = "localhost";
  port: number = 8080;

  baseUrl: string = `${this.protocol}://${this.host}:${this.port}`;

  getMusic = async (mood: string): Promise<Array<music>> => {
    let path = "/getMusic";

    let getMusic: Response = await fetch(`${this.baseUrl}${path}?mood=${mood}`);

    let apiResponse: apiResponse<Array<music>> = await getMusic.json();
    return apiResponse.data;
  };
}
