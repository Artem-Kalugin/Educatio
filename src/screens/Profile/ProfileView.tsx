import React from 'react';
import { View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import Text from '@ui-kit/Text';
import { PresentationalProps } from './index';
import FastImage from 'react-native-fast-image';
import { FlatList } from 'react-native-gesture-handler';
import { colors } from '@styles/index';
import Icon from '@ui-kit/Icon';
import Post from '@components/Post';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { useFocusEffect } from '@react-navigation/native';

const data = [
  {
    imageUri:
      'https://habrastorage.org/getpro/habr/upload_files/2fa/447/60d/2fa44760d0b10b4fa5b28690ade897d2.jpg',
    title: 'Создание секретного туннеля с помощью Go',
    text: 'Быстро, надёжно и секретно. И со странным названием Trutun :-)',
    views: Math.round(Math.random() * 1000) + 100,
    likes: Math.round(Math.random() * 100),
  },
  {
    imageUri:
      'https://habrastorage.org/getpro/habr/upload_files/0ca/008/053/0ca00805307ef4ad61877655b1ae7f0a.png',
    title: 'Как студенты решили хакатонить и что из этого вышло',
    text: 'История о том, как студенты программисты решили помочь школьникам зажечь искру интереса к программированию.',
    views: Math.round(Math.random() * 1000) + 100,
    likes: Math.round(Math.random() * 100),
  },
  {
    title: 'Конь остановлен, изба догорела',
    text: 'С виду – мужики как мужики. Ну да, среднего возраста, со слегка притухшим взглядом, без искорки. Но таких много среди пытающихся войти в айти. Внешние признаки в резюме и на собеседовании – как у всех, ничего выдающегося.',
    views: Math.round(Math.random() * 1000) + 100,
    likes: Math.round(Math.random() * 100),
  },
  {
    imageUri:
      'https://habrastorage.org/getpro/habr/upload_files/541/7ee/89b/5417ee89b869f95ceb17bb059fd34cde.PNG',
    title: 'DFD (Data Flow Diagram) Диаграммы',
    text: `Привет всем!
    Сегодня решил написать основную теорию про применение диаграмм потоков данных как одного из инструментов моделирования процессов.`,
    views: Math.round(Math.random() * 1000) + 100,
    likes: Math.round(Math.random() * 100),
  },
];

const ProfileView: React.FC<PresentationalProps> = (props): JSX.Element => {
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets.top);

  useFocusEffect(() => {
    StatusBar.setBarStyle('light-content');
  });

  return (
    <View>
      <LinearGradient
        style={styles.gradient}
        colors={['#00000044', '#00000000']}
        pointerEvents="none"
      />
      <FlatList
        bounces={false}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.header}>
            <FastImage
              source={
                props.user?.background
                  ? {
                      uri: props.user?.background,
                    }
                  : require('../../assets/img/background.jpeg')
              }
              style={styles.image}>
              <LinearGradient
                style={styles.inlineGradient}
                colors={['#000000', '#00000000']}>
                <Text weight="bold" color={'white'} size={20}>
                  {props.user?.name}
                </Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Settings')}>
                  <Icon color={'white'} name="settings" />
                </TouchableOpacity>
              </LinearGradient>
            </FastImage>
            <View style={styles.avatarContainer}>
              <FastImage
                source={
                  props.user?.avatar
                    ? {
                        uri: props.user?.avatar,
                      }
                    : require('../../assets/img/noavatar.png')
                }
                style={styles.avatar}
              />
            </View>

            <View style={styles.info}>
              <View style={styles.infoBlock}>
                <Icon name="like" color={colors.grayscale[60]} />
                <Text color={colors.grayscale[60]} style={styles.infoText}>
                  217 Likes
                </Text>
              </View>
              <View style={styles.infoBlock}>
                <Icon color={colors.grayscale[60]} name="person" />
                <Text color={colors.grayscale[60]} style={styles.infoText}>
                  7 Subs
                </Text>
              </View>
            </View>
            <View style={styles.control}>
              <TouchableOpacity style={styles.controlBlock}>
                <Text color={colors.grayscale[60]}>Posts</Text>
              </TouchableOpacity>
              <View style={styles.controlDivider} />
              <TouchableOpacity style={styles.controlBlock}>
                <Text color={colors.grayscale[60]}>Info</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
        style={styles.list}
        data={data}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Post {...item} />
          </View>
        )}
      />
    </View>
  );
};

const getStyles = (insetsTop: number) =>
  StyleSheet.create({
    container: {
      backgroundColor: colors.grayscale[10],
    },
    list: {
      backgroundColor: colors.grayscale[10],
    },
    gradient: {
      width: '100%',
      height: 100,
      paddingTop: insetsTop,
      position: 'absolute',
      zIndex: 2,
    },
    inlineGradient: {
      width: '100%',
      height: 200,
      paddingTop: insetsTop,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
    },
    header: {
      borderColor: 'blue',
    },
    postContainer: {
      paddingHorizontal: 16,
      paddingVertical: 6,
    },
    image: {
      aspectRatio: 1.7,
      width: '100%',
      borderBottomWidth: 10,
      borderColor: 'white',
    },
    avatarContainer: {
      height: 100,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 180,
      zIndex: 2,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    avatar: {
      position: 'absolute',
      height: 100,
      width: 100,
      backgroundColor: colors.grayscale[30],
      borderWidth: 10,
      borderRadius: 50,
      borderColor: 'white',
    },
    listContent: {
      flexGrow: 1,
    },
    info: {
      height: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderColor: colors.grayscale[30],
      backgroundColor: 'white',
    },
    infoText: {
      marginLeft: 4,
    },
    infoBlock: {
      height: '100%',
      flexDirection: 'row',
      width: '40%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    control: {
      backgroundColor: 'white',
      height: 60,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderColor: colors.grayscale[30],
    },
    controlBlock: {
      height: '100%',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    controlDivider: {
      width: 1,
      backgroundColor: colors.grayscale[30],
    },
  });

export default ProfileView;
