import {PostEntity} from '@home/domain/entities';

export namespace CardPostComponentModels {
  export type Props = {
    content?: PostEntity['content'];
    author?: PostEntity['author'];
    likes?: PostEntity['likes'];
    saved?: PostEntity['saved'];
    liked?: PostEntity['liked'];
    comments?: PostEntity['comments'];
    description?: PostEntity['description'];
    creationDate?: PostEntity['creationDate'];
    onComment: () => void;
    onLike: () => void;
    onSave: () => void;
    onShare: () => void;
    onViewProfile: () => void;
    onViewPost: () => void;
  };
}
