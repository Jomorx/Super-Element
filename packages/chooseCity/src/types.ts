export interface City {
  code: string;
  spell: string;
  name: string;
  label:string
}

export interface Province {
  name: string;
  data: string[];
  id?: string;
}
