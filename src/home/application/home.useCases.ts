import {PostEntity} from '@home/domain/entities';
import {HomeRepositoryModels} from '@home/domain/repositories';
import {HomeUseCasesModels} from '@home/domain/useCases';

export class HomeUseCasesImpl implements HomeUseCasesModels.UseCase {
  constructor(private readonly repository: HomeRepositoryModels.Repository) {}
  async getListPost(): Promise<PostEntity[]> {
    try {
      return await this.repository.getListPost();
    } catch (error) {
      throw error;
    }
  }
}
