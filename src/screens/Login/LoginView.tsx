import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import Text from '@ui-kit/Text';
import { PresentationalProps } from './index';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '@ui-kit/Icon';

const LoginView: React.FC<PresentationalProps> = (props): JSX.Element => {
  const styles = getStyles();

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 46,
            color: 'red',
          }}>
          Aad
        </Text>
        <Icon />
      </View>
    </SafeAreaView>
  );
};

interface Styles {
  container: ViewStyle;
}

const getStyles = () =>
  StyleSheet.create<Styles>({
    container: {
      width: 90,
      height: 90,
      backgroundColor: 'red',
    },
  });

export default LoginView;
