import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

import Text from '@ui-kit/Text';
import Icon from '@ui-kit/Icon';

import { colors } from '@styles/index';

import { AppStackParams } from '@navigation/index';
import type { StackNavigationProp } from '@react-navigation/stack';

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
  const navigation = useNavigation<StackNavigationProp<AppStackParams>>();

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
          <Text color={colors.grayscale[90]} size={14}>
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

const getStyles = () =>
  StyleSheet.create({
    container: {
      height: 200,
      width: '100%',
      flexDirection: 'row',
      padding: 12,
      borderRadius: 12,
      backgroundColor: 'white',
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
      height: '100%',
      borderRadius: 6,
      aspectRatio: 0.8,
      backgroundColor: 'black',
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 6,
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
      flexDirection: 'row-reverse',
      marginTop: 'auto',
      backgroundColor: 'white',
    },
    counter: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    counterText: {
      marginLeft: 8,
    },
    viewIcon: {
      marginLeft: 16,
    },
  });

export default Post;
