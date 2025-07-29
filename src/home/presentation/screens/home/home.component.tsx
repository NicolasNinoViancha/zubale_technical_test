import {View, FlatList, ActivityIndicator, Alert} from 'react-native';
import {Text} from '@shared/components';
import {CardPost} from './components';
import {HomeScreenModels} from './home.models';
import {useStyles} from './home.styles';

const ItemSeparator = () => {
  const styles = useStyles();
  return <View style={styles.itemSeparator} />;
};

const HomeComponent = ({
  data = [],
  isError = false,
  isLoading = false,
  isFirstLoading = true,
  onErrorRetry,
}: HomeScreenModels.ComponentProps) => {
  const styles = useStyles();
  const renderItem = ({item}: HomeScreenModels.RenderItem) => {
    return (
      <CardPost
        content={item.content}
        author={item.author}
        likes={item.likes}
        saved={item.saved}
        liked={item.liked}
        comments={item.comments}
        description={item.description}
        creationDate={item.creationDate}
        onComment={() => Alert.alert(`action onComment >> post ${item.id}`)}
        onLike={() => Alert.alert(`action onLike >> post ${item.id}`)}
        onSave={() => Alert.alert(`action onSave >> post ${item.id}`)}
        onShare={() => Alert.alert(`action onShare >> post ${item.id}`)}
        onViewProfile={() => Alert.alert(`action onViewProfile >> post ${item.id}`)}
        onViewPost={() => Alert.alert(`action onViewPost >> post ${item.id}`)}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        windowSize={7}
        removeClippedSubviews={true}
        data={isError ? [] : data}
        keyExtractor={item => `post_${item.id}`}
        renderItem={renderItem}
        ListEmptyComponent={
          <>
            <View style={styles.ctnEmpty}>
              {isFirstLoading && <ActivityIndicator />}
              {isError && <Text>An error occurred, please try again.</Text>}
              {!isError && (!isFirstLoading || !isLoading) && <Text>No posts available.</Text>}
            </View>
          </>
        }
        ItemSeparatorComponent={ItemSeparator}
        onRefresh={onErrorRetry}
        refreshing={isLoading}
      />
    </View>
  );
};

export default HomeComponent;
