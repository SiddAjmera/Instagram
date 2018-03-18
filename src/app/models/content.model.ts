import { ContentType } from './content.enum';

export interface IContent {
    type: ContentType;
    source: string;
}