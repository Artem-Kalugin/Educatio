import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { colors } from '@styles/index';

export interface ICheckbox {
  state: boolean;
  disabled: boolean;
  onPress: () => {};
}

const Checkbox: React.FC<Partial<ICheckbox>> = ({
  state = false,
  disabled = true,
  onPress = () => {},
}): JSX.Element => {
  const styles = getStyles();

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles.outterCircle}>
      {state || <View style={styles.innerCircle} />}
    </TouchableOpacity>
  );
};

const getStyles = () =>
  StyleSheet.create({
    outterCircle: {
      width: 24,
      height: 24,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: colors.unb,
      alignItems: 'center',
      justifyContent: 'center',
    },
    innerCircle: {
      width: 14,
      height: 14,
      borderRadius: 8,
      backgroundColor: colors.unb,
    },
  });

export default Checkbox;
