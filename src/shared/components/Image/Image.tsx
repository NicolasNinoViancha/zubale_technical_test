import {useState} from 'react';
import {View, ActivityIndicator, Image as RNImage} from 'react-native';
//import FastImage from '@d11/react-native-fast-image';
import {useTheme} from '@shared/hooks';
import {ImageComponentModels} from './image.models';
import {useStyles} from './image.styles';
import {IMAGE_DEFAULT} from './image.constants';

const Image = ({
  containerStyles,
  source = '',
  type = 'default',
  resizeMode = 'cover',
  sizeIndicator = 'small',
}: //priority = FastImage.priority.normal,
//cache = 'immutable',
ImageComponentModels.Props) => {
  const ImageDefault = IMAGE_DEFAULT[type];
  const styles = useStyles();
  const {colors} = useTheme();
  const [errorLoading, setErrorLoading] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const onError = () => setErrorLoading(true);
  if (!source || errorLoading)
    return (
      <View style={[styles.container, containerStyles]}>
        <RNImage source={ImageDefault} style={styles.image} resizeMode={'contain'} />
      </View>
    );
  return (
    <View style={[styles.container, containerStyles]}>
      {isLoading && (
        <View style={styles.ctnLoading}>
          <View style={[styles.ctnLoading, styles.ctnIndicator]}>
            <ActivityIndicator size={sizeIndicator} color={colors.primaryText} />
          </View>
        </View>
      )}
      <RNImage
        onError={onError}
        style={styles.container}
        source={{
          uri: source,
        }}
        resizeMode={resizeMode}
        onLoadStart={() => setIsLoading(true)}
        onLoadEnd={() => setIsLoading(false)}
      />
    </View>
  );
};
export default Image;
