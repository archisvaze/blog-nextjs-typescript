export interface ICategory {
    _id: number;
    title: string;
    slug: string;
}


export interface ICollectionResponse<T> {
    data: T;
}


export interface IAuthor {
    firstname: string;
    lastname: string;
    avatar: string;
}

export interface IArticle {
    _id: number;
    title: string;
    content: string;
    slug: string;
    img: string;
    timestamp: string;
    author: IAuthor;
}


export interface IQueryOptions {
    filters: any;
    sort: any;
    populate: any;
    pagination: any;

}