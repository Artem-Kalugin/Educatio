import React from 'react';
import {
  View,
  TextStyle,
  ViewStyle,
  ImageStyle,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Text from '@ui-kit/Text';
import { colors } from '@styles/index';

export interface IButton {
  style: ViewStyle;
  type: 'primary' | 'secondary' | 'text';
  value: string;
  disabled: boolean;
  onPress: () => void;
}

const Button: React.FC<Partial<IButton>> = ({
  style = {},
  type = 'primary',
  value = 'default text',
  disabled = false,
  onPress = () => {},
}): JSX.Element => {
  const styles = getStyles();
  const buttonStyles = getButtonTypeStyles(type);

  const ButtonWrapper = TouchableOpacity;

  return (
    <ButtonWrapper
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled}
      style={[
        styles.container,
        buttonStyles.button,
        disabled ? styles.disabled : {},
        style,
      ]}>
      <Text
        size={16}
        weight={buttonStyles.text.fontWeight}
        color={buttonStyles.text.color}>
        {value}
      </Text>
    </ButtonWrapper>
  );
};

const getButtonTypeStyles: (type: IButton['type']) => {
  text: TextStyle;
  button: ViewStyle;
} = type => {
  switch (type) {
    case 'primary':
      return {
        text: {
          fontWeight: '700',
          color: colors.grayscale[5],
        },
        button: {
          backgroundColor: colors.unb,
        },
      };
    case 'text':
      return {
        text: {
          fontWeight: '500',
          color: colors.grayscale[70],
        },
        button: {
          backgroundColor: 'transparent',
        },
      };
    case 'secondary':
      return {
        text: {
          fontWeight: '400',
          color: colors.iris,
        },
        button: {
          borderColor: colors.iris,
          backgroundColor: 'transparent',
        },
      };
    default:
      return {
        text: {
          fontWeight: '500',
          color: colors.iris,
        },
        button: {
          borderColor: colors.iris,
          backgroundColor: 'transparent',
        },
      };
  }
};

interface Styles {
  container: ViewStyle;
  disabled: ViewStyle;
}

const getStyles = () =>
  StyleSheet.create<Styles>({
    container: {
      height: 52,
      borderRadius: 12,
      width: '100%',
      borderWidth: 2,
      borderColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
    },
    disabled: {
      opacity: 0.3,
    },
  });

export default Button;
