import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

import Text from '@ui-kit/Text';
import Icon from '@ui-kit/Icon';

import { colors } from '@styles/index';

export interface IHeader {
  transparentLeftIcon: boolean;
  transparentRightIcon: boolean;
  hideLeftIcon: boolean;
  hideRightIcon: boolean;
  onPressLeftIcon: () => void;
  onPressRightIcon: () => void;
  title: string;
}

const Header: React.FC<Partial<IHeader>> = ({
  transparentLeftIcon = false,
  transparentRightIcon = false,
  hideLeftIcon = false,
  hideRightIcon = false,
  title = 'Default Title',
  onPressLeftIcon = () => {},
  onPressRightIcon = () => {},
}): JSX.Element => {
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          {!hideLeftIcon ? (
            <TouchableOpacity onPress={onPressLeftIcon}>
              <Icon
                name="chevron-back"
                color={
                  transparentLeftIcon ? 'transparent' : colors.grayscale[5]
                }
              />
            </TouchableOpacity>
          ) : null}
        </View>
        <View style={styles.text}>
          <Text size={20} weight="700" color={colors.grayscale[5]}>
            {title}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          {!hideRightIcon ? (
            <TouchableOpacity onPress={onPressRightIcon}>
              <Icon
                name="chevron-forward"
                color={
                  transparentRightIcon ? 'transparent' : colors.grayscale[5]
                }
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </View>
  );
};

const getStyles = (insets: EdgeInsets) =>
  StyleSheet.create({
    wrapper: {
      width: '100%',
      paddingTop: insets.top,
      paddingBottom: 4,
      backgroundColor: colors.unb,
    },
    container: {
      height: 40,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 4,
    },
    buttonContainer: {
      width: 48,
    },
    text: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
    },
  });

export default Header;
