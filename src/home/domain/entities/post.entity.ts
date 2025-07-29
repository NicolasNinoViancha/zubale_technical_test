interface PostUser {
  name: string;
  avatar: string;
}

export interface PostEntity {
  id: string;
  content: string;
  user: PostUser;
  likes: number;
  saved: boolean;
  liked: boolean;
  comments: number;
  description: string;
  creationDate: Date;
}
