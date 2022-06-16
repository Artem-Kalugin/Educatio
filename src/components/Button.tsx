import React from 'react';
import {
  View,
  TextStyle,
  ViewStyle,
  ImageStyle,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Text from '@ui-kit/Text';
import { colors } from '@styles/index';

export interface IButton {
  style: ViewStyle;
  type: 'primary' | 'secondary' | 'text' | 'inactive';
  value: string;
  disabled?: boolean;
  onPress: () => void;
  loading?: boolean;
}

const Button: React.FC<Partial<IButton>> = ({
  style = {},
  type = 'primary',
  value = 'default text',
  disabled = false,
  onPress = () => {},
  loading = false,
}): JSX.Element => {
  const styles = getStyles();
  const buttonStyles = getButtonTypeStyles(type);

  const ButtonWrapper = TouchableOpacity;

  return (
    <View>
      <ButtonWrapper
        onPress={onPress}
        activeOpacity={0.7}
        disabled={disabled || loading}
        style={[
          styles.container,
          buttonStyles.button,
          disabled ? { opacity: 0.7 } : {},
          style,
        ]}>
        {!loading ? (
          <Text
            size={16}
            weight={buttonStyles.text.fontWeight}
            color={buttonStyles.text.color}>
            {value}
          </Text>
        ) : (
          <ActivityIndicator color={'white'} />
        )}
      </ButtonWrapper>
    </View>
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
    case 'inactive':
      return {
        text: {
          fontWeight: '400',
          color: colors.grayscale[40],
        },
        button: {
          backgroundColor: colors.grayscale[20],
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

const getStyles = () =>
  StyleSheet.create({
    container: {
      height: 52,
      borderRadius: 12,
      width: '100%',
      borderWidth: 2,
      borderColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Button;
