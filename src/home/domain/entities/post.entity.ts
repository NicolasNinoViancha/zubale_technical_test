interface PostAuthor {
  name: string;
  avatar: string;
}

export interface PostEntity {
  id: string;
  content: string;
  author: PostAuthor;
  likes: number;
  saved: boolean;
  liked: boolean;
  comments: number;
  description: string;
  creationDate: Date;
}
