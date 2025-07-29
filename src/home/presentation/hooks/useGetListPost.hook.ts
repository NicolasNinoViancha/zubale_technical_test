import {useEffect, useState} from 'react';
import {PostEntity} from '@home/domain/entities';
import di from '../di';

const useGetListPost = () => {
  const [posts, setPosts] = useState<PostEntity[]>([]);
  const [isFirstLoading, setIsFirstLoading] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  useEffect(() => {
    getFirstListPost();
  }, []);
  const getFirstListPost = async () => {
    setIsFirstLoading(true);
    setIsError(false);
    try {
      const response = await di.homeUseCases.getListPost();
      setPosts(response);
    } catch (error) {
      setIsError(true);
      throw error;
    } finally {
      setIsFirstLoading(false);
    }
  };
  const getListPost = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await di.homeUseCases.getListPost();
      setPosts(response);
    } catch (error) {
      setIsError(true);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  return {
    posts,
    isFirstLoadingPosts: isFirstLoading,
    isLoadingPosts: isLoading,
    isErrorPosts: isError,
    getListPost,
  };
};

export default useGetListPost;
