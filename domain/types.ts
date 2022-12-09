export interface Post {
    id: string;
    title: string;
    author: Author;
    contents: string;
}

export interface Author {
    id: string;
    name: string;
    subject: string;
}