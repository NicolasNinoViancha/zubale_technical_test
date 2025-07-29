import {View, Pressable} from 'react-native';
import {Text, Image, Icon} from '@shared/components';
import {CardPostComponentModels} from './cardPost.models';
import {useStyles} from './cardPost.styles';
import {useTheme} from '@shared/hooks';

const CardPost = ({
  content = '',
  author,
  likes = 0,
  saved = false,
  liked = false,
  comments = 0,
  description = '',
  onComment,
  onLike,
  onSave,
  onShare,
  onViewProfile,
  onViewPost,
}: CardPostComponentModels.Props) => {
  const styles = useStyles();
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.ctnHeader}>
        <View style={styles.ctnAvatarAuthor}>
          <Pressable onPress={onViewProfile}>
            <Image containerStyles={styles.ctnImage} source={author?.avatar} />
          </Pressable>
        </View>
        <View style={styles.ctnDetailsAuthor}>
          <Text style={styles.nameAuthor}>{author?.name}</Text>
          <Text style={styles.locationAuthor}>{`Bogota, Colombia`}</Text>
        </View>
        <Icon name="ellipsis-h" size={18} />
      </View>
      <View style={styles.ctnMedia}>
        <Pressable onPress={onViewPost}>
          <Image type="media" containerStyles={styles.ctnImage} source={content} />
        </Pressable>
      </View>
      <View style={styles.ctnFooter}>
        <View style={styles.ctnActions}>
          <Pressable style={styles.ctnMainAction} onPress={onLike}>
            <Icon
              name={liked ? 'heart-o' : 'heart'}
              color={liked ? colors.primaryText : colors.accent}
              size={18}
            />
          </Pressable>
          <Pressable style={styles.ctnMainAction} onPress={onComment}>
            <Icon name={'comment-o'} size={18} />
          </Pressable>
          <Pressable onPress={onShare}>
            <Icon name={'send-o'} size={18} />
          </Pressable>
          <View style={styles.ctnSavedAction}>
            <Pressable onPress={onSave}>
              <Icon name={saved ? 'bookmark-o' : 'bookmark'} color={colors.primaryText} size={18} />
            </Pressable>
          </View>
        </View>
        <Text style={styles.likes}>{`${likes} Me gusta`}</Text>
        <Text style={styles.ctnDescription} numberOfLines={1}>
          <Text style={styles.description}>{`${author?.name} `}</Text>
          <Text style={styles.descriptionContent}>{description}</Text>
        </Text>
        <Text style={styles.comments}>{`${comments} Respuestas * Votar`}</Text>
        <View style={styles.ctnInputComment}>
          <View style={styles.ctnUserAvatar}>
            <Image type="user" containerStyles={styles.ctnImage} />
          </View>
          <Text style={styles.placeholder}>{`Agregar un comentario..`}</Text>
        </View>
      </View>
    </View>
  );
};
export default CardPost;
