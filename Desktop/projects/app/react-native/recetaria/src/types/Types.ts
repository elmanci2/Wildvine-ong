/// types for recipis
export interface RecipeType {
  video: string | null;
  id: string;
  image: string;
  time: string;
  title: string;
  preview: string;
  history: string;
  ingredients: Ingredient[];
  tips: string[];
  metaextra: Metaextra[];
  steps: Step[];
  secret: string | null;
  keywords: Keyword[];
  uploadDate: string;
  metaheader: Metaheader[];
  ratings: Rating[];
}

export interface Ingredient {
  id: number;
  name: string;
  emoji: string;
}

export interface Metaextra {
  id: number;
  title: string;
  values: Value[];
}

export interface Value {
  item: string;
}

export interface Step {
  instruction: string;
  description: string;
}

export interface Keyword {
  id: number;
  keyword: string;
}

export interface Metaheader {
  id: number;
  title: string;
  element: string;
}

export interface Rating {
  stars: string;
  votes: string;
}
