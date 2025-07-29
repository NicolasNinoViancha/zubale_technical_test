//import {ResizeMode, Priority} from '@d11/react-native-fast-image';
import {StyleProp, ViewStyle, ImageResizeMode} from 'react-native';

export namespace ImageComponentModels {
  export type typeImage = 'default' | 'user' | 'media';

  export type Props = {
    testID?: string;
    containerStyles?: StyleProp<ViewStyle>;
    source?: string;
    type?: typeImage;
    //priority?: Priority;
    //resizeMode?: ResizeMode;
    resizeMode?: ImageResizeMode;
    cache?: 'cacheOnly' | 'immutable' | 'web';
    sizeIndicator?: 'large' | 'small';
    thumbnailUrl?: string;
  };

  export type DefaultImage = {
    [key in typeImage]: any;
  };
}
