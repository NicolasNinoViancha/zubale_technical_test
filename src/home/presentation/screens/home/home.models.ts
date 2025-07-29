import {NavigationModels} from '@shared/navigation';
import {PostEntity} from '@home/domain/entities';

export namespace HomeScreenModels {
  export type PresenterProps =
    NavigationModels.RootBottomTapScreenProps<NavigationModels.MAIN_ROUTES_NAMES.HOME>;

  export type ComponentProps = {
    data?: Array<PostEntity>;
    isLoading?: boolean;
    isFirstLoading?: boolean;
    isError?: boolean;
    onErrorRetry: () => void;
  };

  export type RenderItem = {
    item: PostEntity;
  };
}
