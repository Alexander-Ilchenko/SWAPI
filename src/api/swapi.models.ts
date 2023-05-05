// создаем тип для ответа со списком
export type SwapiResult<T> = {
  count: number;
  next: string;
  previous: number | null;
  results: T[];
};

// тип сущности для обьекта героя
export type Hero = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: Gender;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
};
// тип сущности для обьекта планеты
export type Planet = {
  climate: string;
  created: Date;
  diameter: string;
  edited: Date;
  films: string[];
  gravity: string;
  name: string;
  orbital_period: string;
  population: string;
  residents: string[];
  rotation_period: string;
  surface_water: string;
  terrain: string;
  url: string;
};
//
export enum Gender {
  Female = "female",
  Male = "male",
  NA = "n/a",
}
// експортируем тип для ответа со списком героев
export type HeroesResponse = SwapiResult<Hero>;
// експортируем тип для ответа со списком планет
export type PlanetesResponse = SwapiResult<Planet>;
