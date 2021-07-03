export interface IProduct {
  name?: string;
  price?: number | null;
  description?: string | null;
  imageUrl?: string | null;
}

export class Product implements IProduct {
  constructor(public name?: string, public price?: number | null, public description?: string | null, public imageUrl?: string | null) {}
}
