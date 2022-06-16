import React, { useEffect } from 'react';
import {
  View,
  ViewStyle,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import Text from '@ui-kit/Text';
import { PresentationalProps } from './index';
import TextInput from '@components/TextInput';
import Checkbox from '@components/Checkbox';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Post from '@components/Post';
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

const SearchView: React.FC<PresentationalProps> = (props): JSX.Element => {
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets.top);

  useFocusEffect(() => {
    StatusBar.setBarStyle('dark-content');
  });

  return (
    <View style={styles.container}>
      <View style={styles.searchControl}>
        <TextInput textInputStyle={styles.label} label="Search" />
        <View style={styles.controlPanel}>
          <TouchableOpacity style={styles.checkbox}>
            <Checkbox state={false} />
            <Text style={styles.checkboxText}>Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.checkbox}>
            <Checkbox state={true} />
            <Text style={styles.checkboxText}>Peoples</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        contentContainerStyle={[
          styles.listContentContainer,
          true ? styles.emptyList : {},
        ]}
        data={data}
        renderItem={({ item }) => <Post style={styles.listItem} {...item} />}
        showsVerticalScrollIndicator={false}
        style={styles.list}
        ListEmptyComponent={<Text>Start Searching!</Text>}
        ListFooterComponent={<View style={styles.listFooter} />}
      />
    </View>
  );
};

const getStyles = (paddingTop: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    searchControl: {
      zIndex: 3,
      paddingTop: paddingTop,
      backgroundColor: 'white',
      paddingHorizontal: 16,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },
    list: {
      paddingTop: 12,
      flex: 1,
      paddingHorizontal: 16,
    },
    listContentContainer: {
      flexGrow: 1,
    },
    listFooter: {
      marginBottom: 12,
    },
    listItem: {
      marginBottom: 12,
    },
    emptyList: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    label: {
      fontSize: 20,
      fontWeight: '500',
    },
    checkbox: {
      flex: 1,
      flexDirection: 'row',
    },
    checkboxText: {
      marginLeft: 4,
    },
    controlPanel: {
      marginTop: 4,
      marginBottom: 8,
      flexDirection: 'row',
    },
  });

export default SearchView;
