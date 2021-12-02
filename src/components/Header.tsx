import React from 'react';
import {
  View,
  TextStyle,
  ViewStyle,
  ImageStyle,
  StyleSheet,
} from 'react-native';
import Text from '@ui-kit/Text';
import { colors } from '@styles/';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from '@ui-kit/Icon';

export interface IHeader {
  transparentLeftIcon: boolean;
  transparentRightIcon: boolean;
  hideLeftIcon: boolean;
  hideRightIcon: boolean;
  onPressLeftIcon: () => void;
  onPressRightIcon: () => void;
  alignText: 'center' | 'left' | 'right';
}

const Header: React.FC<Partial<IHeader>> = ({
  transparentLeftIcon = false,
  transparentRightIcon = false,
  hideLeftIcon = false,
  hideRightIcon = false,
  alignText = 'center',
  onPressLeftIcon = () => {},
  onPressRightIcon = () => {},
}): JSX.Element => {
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets, alignText);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {!hideLeftIcon ? (
          <Icon
            name="chevron-back"
            color={transparentLeftIcon ? 'transparent' : colors.grayscale[5]}
          />
        ) : null}
        <View style={styles.text}>
          <Text size={24} weight="700" color={colors.grayscale[5]}>
            Header
          </Text>
        </View>
        {!hideRightIcon ? (
          <Icon
            name="chevron-forward"
            color={transparentRightIcon ? 'transparent' : colors.grayscale[5]}
          />
        ) : null}
      </View>
    </View>
  );
};

interface Styles {
  wrapper: ViewStyle;
  container: ViewStyle;
  text: ViewStyle;
}

const convertAlignToFlex = {
  center: 'center',
  left: 'flex-start',
  right: 'flex-end',
};

const getStyles = (insets: EdgeInsets, alignText: IHeader['alignText']) =>
  StyleSheet.create<Styles>({
    wrapper: {
      paddingTop: insets.top,
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
    text: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: convertAlignToFlex[alignText],
    },
  });

export default Header;
