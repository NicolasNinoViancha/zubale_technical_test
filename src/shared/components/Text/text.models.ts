import {TextProps} from 'react-native';

export namespace TextComponentModels {
  export interface Props extends TextProps {
    type?: 'primary' | 'secondary';
  }
}
