import React from 'react';
import { View, ViewStyle, StyleSheet, StatusBar } from 'react-native';
import Text from '@ui-kit/Text';
import { PresentationalProps } from './index';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '@ui-kit/Icon';
import Button from '@components/Button';
import { colors } from '@styles/index';
import { useFocusEffect } from '@react-navigation/native';

const StartView: React.FC<PresentationalProps> = (props): JSX.Element => {
  const styles = getStyles();

  useFocusEffect(() => {
    StatusBar.setBarStyle('dark-content');
  });

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <View style={styles.topBlock}>
        <Icon size={200} color={colors.yambukhica} />
        <View style={styles.title}>
          <Text size={28} weight="700" color={colors.yambukhica}>
            Educatio
          </Text>
          <Text
            size={20}
            weight="400"
            fontFamily={'OpenSansSemiCondensed'}
            color={colors.yambukhica}>
            Hi, this application was created to let people share knowledge with
            others! Select an option to start.
          </Text>
        </View>
      </View>
      <View style={styles.controls}>
        <Button
          onPress={() => props.navigation.navigate('Login')}
          value="Log in"
          style={styles.logInButton}
        />
        <Button
          onPress={() => props.navigation.navigate('SignUp')}
          value="Sign Up"
          type="text"
        />
      </View>
    </SafeAreaView>
  );
};

interface Styles {
  container: ViewStyle;
  topBlock: ViewStyle;
  title: ViewStyle;
  controls: ViewStyle;
  logInButton: ViewStyle;
}

const getStyles = () =>
  StyleSheet.create<Styles>({
    container: {
      paddingBottom: 24,
      width: '100%',
      height: '100%',
      padding: 12,
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    topBlock: {
      width: '100%',
      alignItems: 'center',
    },
    title: {
      width: '100%',
    },
    controls: {
      marginTop: 'auto',
      width: '100%',
    },
    logInButton: {
      marginBottom: 8,
    },
  });

export default StartView;
