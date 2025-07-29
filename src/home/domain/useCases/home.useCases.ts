import {PostEntity} from '../entities';

export namespace HomeUseCasesModels {
  export interface UseCase {
    getListPost(): Promise<PostEntity[]>;
  }
}
