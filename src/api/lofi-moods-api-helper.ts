import { apiResponse, music } from "../types/types";

export default class LofiMoodsApiHelper {
  protocol: string = "http";
  host: string = "localhost";
  port: number = 8080;

  baseUrl: string = `${this.protocol}://${this.host}:${this.port}`;

  addMusic = async (music: music) => {
    let path = "/addMusic";

    let addMusic: Response = await fetch(`${this.baseUrl}${path}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(music),
    });

    let apiResponse: apiResponse<music> = await addMusic.json();
    return apiResponse;
  };

  getMusic = async (mood: string): Promise<Array<music>> => {
    let path = "/getMusic";
    console.log(mood);

    let getMusic: Response = await fetch(`${this.baseUrl}${path}?mood=${mood}`);

    let apiResponse: apiResponse<Array<music>> = await getMusic.json();
    return apiResponse.data;
  };

  updateMusic = async (id: number, column: string, value: string) => {
    let path = "/updateMusic";

    let updateMusic: Response = await fetch(`${this.baseUrl}${path}`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id, [column]: value }),
    });

    let apiResponse: apiResponse<any> = await updateMusic.json();
    return apiResponse;
  };

  deleteMusic = async (id: number): Promise<any> => {
    let path = "/deleteMusic";

    let deleteMusic: Response = await fetch(`${this.baseUrl}${path}`, {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    });

    let apiResponse: apiResponse<any> = await deleteMusic.json();
    return apiResponse;
  };
}
