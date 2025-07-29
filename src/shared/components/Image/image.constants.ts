import {ImageComponentModels} from './image.models';
import LOGO from '@assets/images/instagram_logo.png';
import USER from '@assets/images/user.png';
import CONTENT_NOT_AVAILABLE from '@assets/images/content_not_available.png';

export const IMAGE_DEFAULT: ImageComponentModels.DefaultImage = {
  default: LOGO,
  user: USER,
  media: CONTENT_NOT_AVAILABLE,
};
