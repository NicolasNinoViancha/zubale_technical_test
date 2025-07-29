import {HttpClientModels} from '@core/httpClient';
import {PostEntity} from '@home/domain/entities';
import {PostDto} from '@home/infrastructure/dto';
import {HomeRepositoryModels} from '@home/domain/repositories';
import {PostAdapter} from '@home/infrastructure/adapters';
import {HomeRepositoryError, HttpClientError, PostAdapterError} from '@core/errors';

export class HomeRepositoryImpl implements HomeRepositoryModels.Repository {
  constructor(private readonly http: HttpClientModels.HttpClient) {}
  async getListPost(): Promise<PostEntity[]> {
    const url = HomeRepositoryModels.URLs.LIST_POSTS;
    try {
      const response = await this.http.request<PostDto[]>({
        method: HttpClientModels.METHOD.GET,
        url,
      });
      const posts = response.map(e => PostAdapter.fromDto(e));
      return posts;
    } catch (error: any) {
      const isAdapterError = error instanceof PostAdapterError;
      if (isAdapterError) throw error;
      const isHttpClientError = error instanceof HttpClientError;
      if (isHttpClientError) {
        throw new HomeRepositoryError({message: error.message, details: error.details});
      }
      throw error;
    }
  }
}
