import {PostEntity} from '../entities';

export namespace HomeRepositoryModels {
  export enum URLs {
    LIST_POSTS = '/posts',
  }
  export interface Repository {
    getListPost(): Promise<PostEntity[]>;
  }
}
