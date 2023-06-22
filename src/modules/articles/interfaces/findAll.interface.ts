export interface FindAllResponse {
  status: string;
  totalResults: number;
  articles: Articles[];
}

export interface QueryAndOrderParams {
  query: string;
  sortBy?: string;
}

export interface Articles {
  name: string;
  title: string;
  description: string;
}
