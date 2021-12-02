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
      <View style={styles.logo}>
        <Icon size={200} color={'blue'} />
        <Text size={40} weight="300" color={'blue'}>
          Educatio
        </Text>
        <Text size={24} weight="300" color={'blue'}>
          Hi, this application was created to let peoples share knowledge with
          others! Select option to start
        </Text>
      </View>
    </SafeAreaView>
  );
};

interface Styles {
  container: ViewStyle;
  logo: ViewStyle;
}

const getStyles = () =>
  StyleSheet.create<Styles>({
    container: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    logo: {
      width: '100%',
      alignItems: 'center',
    },
  });

export default LoginView;
