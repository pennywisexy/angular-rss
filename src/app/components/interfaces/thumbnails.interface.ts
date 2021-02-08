import { ThumbnailsItem } from "./thumbnails-item.interface";

export interface Thumbnails {
  default: ThumbnailsItem;
  medium: ThumbnailsItem;
  high: ThumbnailsItem;
  standard: ThumbnailsItem;
  maxres: ThumbnailsItem;
}
