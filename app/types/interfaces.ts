export interface Recipe {
  id: number;
  title: string;
  slug: string;
  image: Image[];
}

export interface Image {
  id: number;
  title: string;
  url: string;
  width: string;
  height: string;
}
