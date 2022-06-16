import React from 'react';
import {
  View,
  TextStyle,
  ViewStyle,
  ImageStyle,
  StyleSheet,
  StyleProp,
  TouchableOpacity,
} from 'react-native';
import Text from '@ui-kit/Text';
import { colors } from '@styles/index';
import Icon from '@ui-kit/Icon';
import FastImage from 'react-native-fast-image';
import { useNavigation } from '@react-navigation/native';

export interface IPost {
  style: object;
  itemId: number;
  imageUri: string;
  title: string;
  text: string;
  likes: number;
  views: number;
}

const Post: React.FC<Partial<IPost>> = ({
  style = {},
  itemId = 1,
  imageUri = 'https://unsplash.it/400/400?image=1',
  title = 'Title',
  text = 'text',
  likes = 1,
  views = 5,
}): JSX.Element => {
  const styles = getStyles();
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate('Post', { itemId: itemId })}
      style={[styles.container, style]}>
      <View style={styles.photo}>
        <FastImage
          resizeMode={FastImage.resizeMode.cover}
          style={styles.image}
          source={{ uri: imageUri }}
        />
      </View>
      <View style={styles.main}>
        <View style={styles.description}>
          <Text color={colors.grayscale[90]} size={14} weight={'bold'}>
            {title}
          </Text>
          <Text color={colors.grayscale[90]} style={styles.text} size={14}>
            {text}
          </Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.counter}>
            <View style={styles.viewIcon}>
              <Icon size={20} name="view" color={colors.grayscale[70]} />
            </View>
            <Text
              size={14}
              color={colors.grayscale[90]}
              style={styles.counterText}>
              {views}
            </Text>
          </View>
          <View style={styles.counter}>
            <View>
              <Icon size={20} name="like" color={colors.grayscale[70]} />
            </View>
            <Text
              size={14}
              color={colors.grayscale[90]}
              style={styles.counterText}>
              {likes}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

interface Styles {
  container: ViewStyle;
  [key: string]: ViewStyle;
}

const getStyles = () =>
  StyleSheet.create<Styles>({
    container: {
      padding: 12,
      borderRadius: 12,
      height: 200,
      width: '100%',
      backgroundColor: 'white',
      flexDirection: 'row',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    photo: {
      borderRadius: 6,
      height: '100%',

      aspectRatio: 0.8,
      backgroundColor: 'black',
    },
    image: {
      borderRadius: 6,
      width: '100%',
      height: '100%',
    },
    main: {
      flex: 1,
      paddingLeft: 12,
    },
    description: {
      flex: 1,
      overflow: 'hidden',
    },
    footer: {
      backgroundColor: 'white',
      marginTop: 'auto',
      flexDirection: 'row-reverse',
    },
    counter: {
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    counterText: {
      marginLeft: 8,
    },
    viewIcon: {
      marginLeft: 16,
    },
  });

export default Post;
