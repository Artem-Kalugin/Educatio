import React from 'react';
import { View, StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import { PresentationalProps } from './index';

import Text from '@ui-kit/Text';

import Header from '@components/Header';
import TextInput from '@components/TextInput';
import Button from '@components/Button';

import { colors } from '@styles/index';

const PhoneConfirmationView: React.FC<PresentationalProps> = (
  props,
): JSX.Element => {
  const styles = getStyles();

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
        <Text size={14} style={styles.normalNotificationText}>
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

const getStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    normalNotificationText: {
      color: colors.grayscale[40],
    },
    main: {
      flex: 1,
      paddingHorizontal: 12,
      paddingTop: 12,
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
