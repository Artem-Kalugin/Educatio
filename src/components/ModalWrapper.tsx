import React, { Children } from 'react';
import {
  View,
  TextStyle,
  ViewStyle,
  ImageStyle,
  StyleSheet,
} from 'react-native';
import Text from '@ui-kit/Text';
import Modal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '@styles/';

export interface IModalWrapper {
  isVisible: boolean;
}

const ModalWrapper: React.FC<Partial<IModalWrapper>> = ({
  isVisible = true,
  children = null,
}): JSX.Element => {
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets.bottom);

  return (
    <Modal
      useNativeDriver={false}
      useNativeDriverForBackdrop={false}
      isVisible={isVisible}
      style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.rulerContainer}>
          <View style={styles.ruler} />
        </View>
        {children}
      </View>
    </Modal>
  );
};

const getStyles = paddingBottom =>
  StyleSheet.create({
    container: {
      flex: 1,
      margin: 0,
    },
    wrapper: {
      marginTop: 'auto',
      padding: 16,
      paddingBottom: 4 + paddingBottom,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
      width: '100%',
      backgroundColor: 'white',
    },
    ruler: {
      width: 80,
      height: 2,
      borderRadius: 2,
      backgroundColor: colors.grayscale[40],
    },
    rulerContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 8,
    },
  });

export default ModalWrapper;
