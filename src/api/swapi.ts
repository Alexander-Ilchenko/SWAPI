import { HeroesResponse, PlanetesResponse } from "./swapi.models";

class Swapi {
  private baseurl = "https://swapi.dev/api";

  async getPeoples(): Promise<HeroesResponse> {
    const response = await fetch(`${this.baseurl}/people`);
    return response.json();
  }
  async getPlanets(): Promise<PlanetesResponse> {
    const response = await fetch(`${this.baseurl}/planets`);
    return response.json();
  }
}

export const swapi = new Swapi();
