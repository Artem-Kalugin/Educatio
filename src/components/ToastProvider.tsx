import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '@ui-kit/Text';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from '@utils/hooks';
import { colors } from '@styles/index';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { deleteToast } from '@store/reducers/toasts/toast';
import { animateLayout } from '@utils/index';
import Icon from '@ui-kit/Icon';

export interface IToastProvider {}

const typeIconsMap = {
  success: 'check',
  warning: 'close',
  reject: 'close',
};

const ToastProvider: React.FC<Partial<IToastProvider>> = (): JSX.Element => {
  const toasts = useSelector(state => state.toasts);
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();

  const styles = getStyles(insets.bottom);

  return (
    <View style={styles.container}>
      {toasts.items?.map(el => (
        <TouchableOpacity
          onPress={() => {
            animateLayout();
            dispatch(deleteToast(el.id));
          }}
          style={styles.toastOverlay}>
          <Icon name={typeIconsMap[el.type]} color="white" />
          <Text style={styles.toastText} color="white">
            {el.text}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const getStyles = (bottomInset: number) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      paddingHorizontal: 12,
      position: 'absolute',
      bottom: bottomInset + 28,
      zIndex: 1,
    },
    toastOverlay: {
      width: '100%',
      flexDirection: 'row',
      marginBottom: 16,
      padding: 8,
      borderRadius: 12,
      backgroundColor: `${colors.grayscale[90]}CC`,
    },
    toastText: {
      paddingLeft: 6,
    },
  });

export default ToastProvider;
