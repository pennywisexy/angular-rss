import { Item } from './item.interface';
export interface YoutubeResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Item[];
}
