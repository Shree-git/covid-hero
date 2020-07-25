export interface Review{
    id: string;
    business_id: string;
    userName: string;
    rating;
    review;
    likes?: number;
    dislikes?: number;
}