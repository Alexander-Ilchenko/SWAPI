import { HeroesResponse, PlanetesResponse } from "./swapi.models";

// создаем класс что бы ограничить область видимости
class Swapi {
  private baseurl = "https://swapi.dev/api";

  // создаем ассинхронный метод(всегда возвращает промис)
  async getPeoples(page = 1): Promise<HeroesResponse> {
    // конфигурируем запрос и отправляем его на url
    const response = await fetch(`${this.baseurl}/people/?page=${page}`);
    // парсим ответ запроса в джейсон
    return response.json();
  }
  async getPlanets(page = 1): Promise<PlanetesResponse> {
    const response = await fetch(`${this.baseurl}/planets/?page=${page}`);
    return response.json();
  }
}

export const swapi = new Swapi();
