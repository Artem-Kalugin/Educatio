import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import Text from '@ui-kit/Text';
import { PresentationalProps } from './index';
import Header from '@components/Header';

const LoginView: React.FC<PresentationalProps> = (props): JSX.Element => {
  const styles = getStyles();

  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

interface Styles {
  container: ViewStyle;
}

const getStyles = () =>
  StyleSheet.create<Styles>({
    container: {},
  });

export default LoginView;
