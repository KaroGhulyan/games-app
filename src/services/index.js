import data from "../data/gamesList.json";

class GamesService {
  constructor(data) {
    this.data = data;
  }
  async getAllGames() {
    return this.data;
  }
}
const gameService = new GamesService(data);
export default gameService;
