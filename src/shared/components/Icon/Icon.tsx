import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import {IconComponentModels} from './icon.models';
import {useTheme} from '@shared/hooks';

const Icon = ({name = 'user', size = 10, color}: IconComponentModels.Props) => {
  const {colors} = useTheme();
  return <IconFontAwesome name={name} size={size} color={color ?? colors.primaryText} />;
};

export default Icon;
