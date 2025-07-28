import {Text as RNText} from 'react-native';
import {TextComponentModels} from './text.models';
import {useStyles} from './text.styles';

const Text = ({type = 'primary', style, children, ...rest}: TextComponentModels.Props) => {
  const styles = useStyles();
  return (
    <RNText {...rest} style={[style, styles[type]]}>
      {children}
    </RNText>
  );
};

export default Text;
