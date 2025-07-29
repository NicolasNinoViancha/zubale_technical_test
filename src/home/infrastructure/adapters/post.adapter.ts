import {PostEntity} from '@home/domain/entities';
import {PostDto} from '../dto';
import {PostAdapterError} from '@core/errors';

export class PostAdapter {
  static fromDto(dto: PostDto): PostEntity {
    if (!dto.id) {
      throw new PostAdapterError({
        message: 'Error:Post dto data invalid',
        details: {message: 'id not available'},
      });
    }
    return {
      id: dto.id,
      content: dto.image ?? '',
      user: PostAdapter.UserPostFromDto(dto),
      likes: dto.likes ?? 0,
      saved: dto.saved ?? false,
      liked: dto.liked ?? false,
      comments: dto.comments ?? 0,
      description: dto.description ?? '',
      creationDate: dto.createdAt ? new Date(dto.createdAt) : new Date(),
    };
  }
  static UserPostFromDto(dto: PostDto): PostEntity['user'] {
    return {
      name: dto.name ?? '',
      avatar: dto.avatar ?? '',
    };
  }
}
