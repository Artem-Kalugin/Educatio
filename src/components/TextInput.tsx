import React from 'react';
import {
  View,
  TextStyle,
  ViewStyle,
  StyleSheet,
  TextInput as _TextInput,
  TextInputProps,
} from 'react-native';
import Text from '@ui-kit/Text';
import { colors } from '@styles/index';

export interface ITextInput extends TextInputProps {
  label: string;
  value: string;
  prefix: string;
  defaultValue: string;
  containerStyle: ViewStyle;
  textInputStyle: TextStyle;
  placeholder: string;
  masked: boolean;
  maxLength: number;
  multiline: false;
}

const TextInput: React.FC<Partial<ITextInput>> = ({
  label = 'label',
  value,
  defaultValue,
  onChangeText = () => {},
  onBlur = () => {},
  placeholder,
  containerStyle,
  textInputStyle,
  textContentType = 'none',
  masked = false,
  maxLength = 100,
  multiline = false,
}): JSX.Element => {
  const styles = getStyles();

  return (
    <View style={[containerStyle, styles.container]}>
      {label ? <Text style={textInputStyle}>{label}</Text> : null}
      <_TextInput
        multiline={multiline}
        textContentType={textContentType}
        secureTextEntry={masked}
        defaultValue={defaultValue}
        value={value}
        style={[styles.input, textInputStyle]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        maxLength={maxLength}
      />
    </View>
  );
};

interface Styles {
  container: ViewStyle;
  input: ViewStyle;
}

const getStyles = () =>
  StyleSheet.create<Styles>({
    container: {
      marginVertical: 6,
    },
    input: {
      marginTop: 6,
      height: 44,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: colors.unb,
      padding: 10,
      fontFamily: 'OpenSans-Regular',
      fontSize: 16,
    },
  });

export default TextInput;
