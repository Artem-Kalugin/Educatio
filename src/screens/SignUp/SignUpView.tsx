import React from 'react';
import { View, ViewStyle, StyleSheet, TextStyle } from 'react-native';
import Text from '@ui-kit/Text';
import { PresentationalProps } from './index';
import Header from '@components/Header';
import TextInput from '@components/TextInput';
import Button from '@components/Button';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '@styles/index';
import { useDispatch } from 'react-redux';
import ToastsActions from '@store/reducers/toasts/actions';

const SignUpView: React.FC<PresentationalProps> = (props): JSX.Element => {
  const styles = getStyles();
  const dispatch = useDispatch();

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Header
        hideRightIcon
        title="Sign Up"
        onPressLeftIcon={props.navigation.goBack}
      />
      <View style={styles.main}>
        <TextInput
          label="Profile Name"
          value={props.profileName}
          onChangeText={e => props.setProfileName(e)}
          placeholder="Type your profile name"
          maxLength={20}
        />
        <TextInput
          masked={true}
          value={props.password}
          onChangeText={e => props.setPassword(e)}
          label="Password"
          placeholder="Type your password"
          maxLength={20}
        />
        <TextInput
          value={props.phone}
          onChangeText={e => props.setPhone(e.startsWith('+') ? e : `+${e}`)}
          label="Phone"
          placeholder="+375444812560"
          maxLength={15}
        />
        <Text size={14} style={[styles.rules, styles.normalNotificationText]}>
          Please note that:{'\n'}
          <Text size={14} style={styles.normalNotificationText}>
            1.The profile name should consist only from numbers and alphabet
            letters and have length more than 6 symbols{'\n'}
          </Text>
          <Text size={14} style={styles.normalNotificationText}>
            2.The password should have length more than 6 symbols
          </Text>
        </Text>
      </View>

      <View style={styles.footer}>
        <Button
          loading={props.isLoading}
          disabled={props.disableNextStep}
          value="Next Step"
          onPress={props.goNext}
        />
      </View>
    </SafeAreaView>
  );
};

interface Styles {
  container: ViewStyle;
  main: ViewStyle;
  rules: ViewStyle;
  footer: ViewStyle;
  normalNotificationText: TextStyle;
  warningNotificationText: TextStyle;
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
      textAlign: 'center',
    },
    normalNotificationText: {
      color: colors.grayscale[40],
    },
    warningNotificationText: {
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

export default SignUpView;
