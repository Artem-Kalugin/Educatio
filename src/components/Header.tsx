import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import Text from '@ui-kit/Text';
import { colors } from '@styles/index';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from '@ui-kit/Icon';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

interface Styles {
  wrapper: ViewStyle;
  container: ViewStyle;
  text: ViewStyle;
  buttonContainer: ViewStyle;
}

const getStyles = (insets: EdgeInsets) =>
  StyleSheet.create<Styles>({
    wrapper: {
      paddingTop: insets.top,
      paddingBottom: 4,
      width: '100%',
      backgroundColor: colors.unb,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 40,
      paddingHorizontal: 4,
      width: '100%',
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
