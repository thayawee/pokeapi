export interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  abilities: IAbilities[];
  held_items: IHeldItems[];
  base_experience: number;
  sprites: ISprites;
  types: ITypes[];
}

export interface IPokemons {
  name: string;
  url: string;
}

export interface IAbilities {
  ability: {
    name: string;
  };
}

export interface IHeldItems {
  item: {
    name: string;
  };
}

export interface ISprites {
  other: {
    dream_world: {
      front_default: string;
    };
    home: {
      front_default: string;
    };
    "official-artwork": {
      front_default: string;
    };
  };
}

export interface ITypes {
  type: {
    name: string;
  };
}
