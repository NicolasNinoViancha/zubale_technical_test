import HomeComponent from './home.component';
import {useGetListPost} from '@home/presentation/hooks';

const HomePresenter = () => {
  const {isLoadingPosts, isFirstLoadingPosts, posts, isErrorPosts, getListPost} = useGetListPost();
  return (
    <HomeComponent
      isFirstLoading={isFirstLoadingPosts}
      isLoading={isLoadingPosts}
      isError={isErrorPosts}
      data={posts}
      onErrorRetry={getListPost}
    />
  );
};

export default HomePresenter;
