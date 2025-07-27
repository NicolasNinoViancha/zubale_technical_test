import {View, Text} from 'react-native';
import {HomeScreenModels} from './home.models';
import {NavigationModels} from '@shared/navigation';
import {styles} from './home.styles';

const HomePresenter = ({navigation}: HomeScreenModels.PresenterProps) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text onPress={() => navigation.navigate(NavigationModels.MAIN_ROUTES_NAMES.SEARCH)}>
        Go Details
      </Text>
    </View>
  );
};

export default HomePresenter;
