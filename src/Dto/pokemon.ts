export interface PokeDto {
  id: number;
  name: string;
  types: {
    type: {
      name: string;
    };
  }[];
  sprites: {
    front_default: string;
  };
}
