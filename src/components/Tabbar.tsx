import React from 'react';
import { View, ViewStyle, StyleSheet, TouchableOpacity } from 'react-native';
import Text from '@ui-kit/Text';
import { colors } from '@styles/index';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from '@ui-kit/Icon';

export interface ITabbar {}

const Tabbar: React.FC<Partial<ITabbar>> = ({
  navigation,
  state,
}): JSX.Element => {
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets.bottom);

  const onPress = (route: string, isFocused: boolean) => {
    if (!isFocused) {
      navigation.navigate(route);
    }
  };

  const tabsData = [
    { iconName: 'feed', title: 'Feed' },
    { iconName: 'search', title: 'Search' },
    { iconName: 'profile', title: 'Profile' },
  ];

  const renderTab = (route: string, routeIndex: number, isFocused: boolean) => (
    <TouchableOpacity
      key={routeIndex}
      onPress={() => onPress(route, isFocused)}>
      <View style={[styles.tab, !isFocused ? styles.nonFocusedItem : {}]}>
        <Icon
          name={tabsData[routeIndex].iconName}
          color={colors.grayscale[80]}
        />
        <Text style={styles.tabText} size={12} color={colors.grayscale[100]}>
          {tabsData[routeIndex].title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {state.routes.map((route: string, routeIndex: number) =>
        renderTab(route, routeIndex, state.index === routeIndex),
      )}
    </View>
  );
};

const getStyles = (paddingBottom: number) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingTop: 8,
      paddingBottom: paddingBottom * 0.85,
      backgroundColor: 'white',
    },
    wrapper: {
      backgroundColor: 'white',
    },
    nonFocusedItem: {
      opacity: 0.3,
    },
    tabWrapper: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tab: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabText: {
      paddingTop: 4,
    },
  });

export default Tabbar;
