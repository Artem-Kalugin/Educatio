import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';
import Text from '@ui-kit/Text';
import { PresentationalProps } from './index';
import { SafeAreaView } from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from '@ui-kit/Icon';
import { useFocusEffect } from '@react-navigation/native';
import RenderHTML from 'react-native-render-html';
import { screenWidth } from '@styles/index';

const source = {
  html: `
  <p style='font-size: 16px'>Когда мы имеем дело с большим проектом, в репозитории которого накопились десятки тысяч строк кода, иногда единственным здравым решением кажется все переписать с нуля, а не оптимизировать. С точки зрения бизнеса может возникнуть вопрос: а почему вообще нужно оптимизировать или даже переписывать приложение, если оно работает? Дело в том, что по мере роста кодовой базы есть вероятность увеличения дублирующихся компонентов/фрагментов кода, появления устаревших участков, которые тормозят сборку, но полезной нагрузки уже не несут. Это негативно влияет на скорость работы приложения и увеличивает срок разработки.</p>`,
};

const PostView: React.FC<PresentationalProps> = (props): JSX.Element => {
  const styles = getStyles();

  useFocusEffect(() => {
    StatusBar.setBarStyle('dark-content');
  });

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <TouchableOpacity onPress={props.navigation.goBack}>
        <Icon name="chevron-back" color={'black'} />
      </TouchableOpacity>
      <Text size={30} weight={'700'}>
        Развертывание React-приложения
      </Text>
      <Text>May 22, 2022</Text>
      <FastImage
        source={{
          uri: 'https://habrastorage.org/getpro/habr/upload_files/32b/90f/8b1/32b90f8b1b7ce1fd1184c686c402d312.png',
        }}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.heroImage}
      />
      <TouchableOpacity style={styles.profileLinkContainer}>
        <View style={styles.profileLink}>
          <FastImage
            style={styles.avatar}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
            }}
          />
          <Text weight="600" style={styles.profileLinkText}>
            Jon
          </Text>
        </View>
        <Icon name="chevron-forward" color={'black'} />
      </TouchableOpacity>
      <RenderHTML source={source} contentWidth={screenWidth - 32} />
    </SafeAreaView>
  );
};

const getStyles = () =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 16,
    },
    avatar: {
      width: 32,
      height: 32,
    },
    profileLink: {
      marginTop: 8,
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileLinkContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    profileLinkText: {
      marginLeft: 4,
    },
    heroImage: {
      width: '100%',
      aspectRatio: 1,
      borderRadius: 40,
      marginTop: 8,
    },
  });

export default PostView;
