import React from 'react';
import { View, StyleSheet, FlatList, StatusBar } from 'react-native';

import { useFocusEffect } from '@react-navigation/native';

import Header from '@components/Header';
import Post from '@components/Post';

import { PresentationalProps } from './index';

const data = [
  {
    imageUri:
      'https://habrastorage.org/getpro/habr/upload_files/2fa/447/60d/2fa44760d0b10b4fa5b28690ade897d2.jpg',
    title: 'Создание секретного туннеля с помощью Go',
    text: 'Быстро, надёжно и секретно. И со странным названием Trutun :-)',
    views: Math.round(Math.random() * 1000) + 100,
    likes: Math.round(Math.random() * 100),
    id: '1',
  },
  {
    imageUri:
      'https://habrastorage.org/getpro/habr/upload_files/0ca/008/053/0ca00805307ef4ad61877655b1ae7f0a.png',
    title: 'Как студенты решили хакатонить и что из этого вышло',
    text: 'История о том, как студенты программисты решили помочь школьникам зажечь искру интереса к программированию.',
    views: Math.round(Math.random() * 1000) + 100,
    likes: Math.round(Math.random() * 100),
    id: '2',
  },
  {
    title: 'Конь остановлен, изба догорела',
    text: 'С виду – мужики как мужики. Ну да, среднего возраста, со слегка притухшим взглядом, без искорки. Но таких много среди пытающихся войти в айти. Внешние признаки в резюме и на собеседовании – как у всех, ничего выдающегося.',
    views: Math.round(Math.random() * 1000) + 100,
    likes: Math.round(Math.random() * 100),
    id: '3',
  },
  {
    imageUri:
      'https://habrastorage.org/getpro/habr/upload_files/541/7ee/89b/5417ee89b869f95ceb17bb059fd34cde.PNG',
    title: 'DFD (Data Flow Diagram) Диаграммы',
    text: `Привет всем!
    Сегодня решил написать основную теорию про применение диаграмм потоков данных как одного из инструментов моделирования процессов.`,
    views: Math.round(Math.random() * 1000) + 100,
    likes: Math.round(Math.random() * 100),
    id: '4',
  },
];

const FeedView: React.FC<PresentationalProps> = (): JSX.Element => {
  const styles = getStyles();

  useFocusEffect(() => {
    StatusBar.setBarStyle('light-content');
  });

  return (
    <View>
      <Header hideRightIcon hideLeftIcon title="Feed" />
      <FlatList
        style={styles.main}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Post style={styles.post} {...item} />}
      />
    </View>
  );
};

const getStyles = () =>
  StyleSheet.create({
    main: {
      paddingTop: 16,
      paddingHorizontal: 16,
    },
    post: {
      marginBottom: 12,
    },
  });

export default FeedView;
