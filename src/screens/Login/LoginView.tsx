import React from 'react';
import { View, ViewStyle, StyleSheet, TextStyle } from 'react-native';
import Text from '@ui-kit/Text';
import { PresentationalProps } from './index';
import Header from '@components/Header';
import TextInput from '@components/TextInput';
import Button from '@components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@styles/index';

const LoginView: React.FC<PresentationalProps> = (props): JSX.Element => {
  const styles = getStyles();

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Header
        hideRightIcon
        title="Log In"
        onPressLeftIcon={props.navigation.goBack}
      />
      <View style={styles.main}>
        <TextInput
          label="Profile Name"
          placeholder="Type your profile name"
          value={props.login}
          onChangeText={e => props.setLogin(e)}
        />
        <TextInput
          masked={true}
          label="Password"
          placeholder="Type your password"
          value={props.password}
          onChangeText={e => props.setPassword(e)}
        />
        {props.passwordIncorrect ? (
          <Text style={styles.errorMessageText}>
            The password is incorrect or the user does not exist, please try
            again
          </Text>
        ) : null}
      </View>

      <View style={styles.footer}>
        <Button
          disabled={props.password.length < 6}
          loading={props.loading}
          value="Log in"
          onPress={props.onGoNext}
        />
      </View>
    </SafeAreaView>
  );
};

interface Styles {
  container: ViewStyle;
  main: ViewStyle;
  rules: ViewStyle;
  errorMessageText: TextStyle;
  footer: ViewStyle;
  authButton: ViewStyle;
}

const getStyles = () =>
  StyleSheet.create<Styles>({
    container: {
      flex: 1,
    },
    rules: {
      marginTop: 'auto',
      marginBottom: 16,
    },
    errorMessageText: {
      color: colors.unb,
    },
    main: {
      paddingHorizontal: 12,
      paddingTop: 12,
      flex: 1,
    },
    footer: {
      paddingHorizontal: 12,
    },
    authButton: {
      borderWidth: 4,
      borderColor: 'black',
    },
  });

export default LoginView;
