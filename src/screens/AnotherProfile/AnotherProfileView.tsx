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
import Button from '@components/Button';

const datas = [
  {
    imageUri:
      'https://habrastorage.org/getpro/habr/upload_files/32b/90f/8b1/32b90f8b1b7ce1fd1184c686c402d312.png',
    title: 'Развертывание React-приложения',
    text: 'Когда мы имеем дело с большим проектом, в репозитории которого накопились десятки тысяч строк кода, иногда единственным здравым решением кажется все переписать с нуля, а не оптимизировать. С точки зрения бизнеса может возникнуть вопрос: а почему вообще нужно оптимизировать или даже переписывать приложение, если оно работает? Дело в том, что по мере роста кодовой базы есть вероятность увеличения дублирующихся компонентов/фрагментов кода, появления устаревших участков, которые тормозят сборку, но полезной нагрузки уже не несут. Это негативно влияет на скорость работы приложения и увеличивает срок разработки.',
    views: 6,
    likes: 2,
  },
  {
    imageUri:
      'https://habrastorage.org/getpro/habr/upload_files/580/972/ed6/580972ed6705acf7b7011def161d5f27.png',
    title:
      'Особенности шифрования популярных мессенджеров: выбираем самый безопасный',
    text: 'По данным на осень 2021 года в тройку наиболее популярных мессенджеров в России входят WhatsApp, Viber и Telegram. Давайте выясним уровень конфиденциальности и безопасности каждого из них. Сделать это можно, только сравнив их с другими приложениями, поэтому рассмотрим также Skype, Facebook Messenger и ряд малоизвестных у нас мессенджеров: Signal, Riot, Threema, Wickr Me, Wire, Session. А еще возьмем популярный у обладателей «яблочных» устройств iMessage.',
    views: 4,
    likes: 1,
  },
];

const AnotherProfileView: React.FC<PresentationalProps> = (
  props,
): JSX.Element => {
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
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('Settings')}>
                  <Icon color={'white'} name="chevron-back" />
                </TouchableOpacity>
                <Text weight="bold" color={'white'} size={20}>
                  {props.user?.name}
                </Text>
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
                  3 Likes
                </Text>
              </View>
              <View style={styles.infoBlock}>
                <Icon color={colors.grayscale[60]} name="person" />
                <Text color={colors.grayscale[60]} style={styles.infoText}>
                  1 Sub
                </Text>
              </View>
            </View>
            <View style={styles.control}>
              <TouchableOpacity style={styles.controlBlock}>
                <Text color={colors.grayscale[60]}>
                  Posts
                </Text>
              </TouchableOpacity>
              <View style={styles.controlDivider} />
              <TouchableOpacity style={styles.controlBlock}>
                <Text color={colors.grayscale[60]}>
                  Info
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        }
        style={styles.list}
        data={datas}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Post {...item} />
          </View>
        )}
        ListFooterComponent={() => (
          <View style={styles.subscribeButton}>
            <Button value="Subscribe" />
          </View>
        )}
      />
    </View>
  );
};

const getStyles = insetsTop =>
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
    subscribeButton: {
      paddingHorizontal: 16,
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

export default AnotherProfileView;
