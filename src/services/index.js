import data from "../data/gamesList.json";

class GamesService {
  constructor(data) {
    this.data = data;
  }
  async getResource(url) {
    console.log(url);
    const res = await url;
    console.log(await res.json());
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `,received ${res.status}`);
    }

    return await res.json();
  }
  async getAllGames() {
    return this.data;
  }
}
const gameService = new GamesService(data);
export default gameService;
