import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import Text from '@ui-kit/Text';
import { PresentationalProps } from './index';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '@components/Header';
import TextInput from '@components/TextInput';
import Button from '@components/Button';
import { colors } from '@styles/index';
import { useDispatch } from 'react-redux';
import ToastsActions from '@store/reducers/toasts/actions';

const PhoneConfirmationView: React.FC<PresentationalProps> = (
  props,
): JSX.Element => {
  const styles = getStyles();
  const dispatch = useDispatch();

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Header
        hideRightIcon
        title="Phone Confirmation"
        onPressLeftIcon={props.navigation.goBack}
      />
      <View style={styles.main}>
        <TextInput
          value={props.code}
          onChangeText={e => props.setCode(e)}
          label="Code"
          placeholder="Type your phone number"
        />
        <Text size={14} style={[styles.rules, styles.normalNotificationText]}>
          We can resend you a code in 60 seconds.
        </Text>
      </View>

      <View style={styles.footer}>
        <Button
          value="Complete"
          disabled={!`${props.code}`.length}
          loading={props.loading}
          onPress={props.goNext}
        />
      </View>
    </SafeAreaView>
  );
};

interface Styles {
  [key: string]: ViewStyle;
}

const getStyles = () =>
  StyleSheet.create<Styles>({
    container: {
      flex: 1,
    },
    normalNotificationText: {
      color: colors.grayscale[40],
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
    resendCodeButton: {
      marginTop: 8,
    },
  });

export default PhoneConfirmationView;
