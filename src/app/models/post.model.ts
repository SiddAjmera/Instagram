import { IComment } from './comment.model';
import { IContent } from './content.model';

export interface IPost {
    id: string;
    owner: string;
    date: string;
    description: string;
    likes: string[];
    comments: IComment[];
    content: IContent[];
}