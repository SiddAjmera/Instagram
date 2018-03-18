import { Gender } from './gender.enum';

export interface IUser {
    username: string;
    avatar: string;
    name: string;
    website: string;
    bio: string;
    email: string;
    number: string;
    gender: Gender;
    posts: string[];
    followers: string[];
    following: string[];
    saved: string[];
}