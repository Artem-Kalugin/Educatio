import React from 'react';
import {
  View,
  TextStyle,
  ViewStyle,
  ImageStyle,
  StyleSheet,
} from 'react-native';
import Text from '@ui-kit/Text';
import {
  initialWindowMetrics,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '@styles/index';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ToastsActions from '@store/reducers/toasts/actions';
import { deleteToast } from '@store/reducers/toasts/toast';
import { animateLayout } from '@utils/';
import Icon from '@ui-kit/Icon';

export interface IToastProvider {}

const typeIconsMap = {
  success: 'check',
  close: 'close',
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

interface Styles {
  [key: string]: ViewStyle;
}

const getStyles = (bottomInset: number) =>
  StyleSheet.create<Styles>({
    container: {
      flex: 1,
      position: 'absolute',
      zIndex: 1,
      width: '100%',
      bottom: bottomInset + 28,
      paddingHorizontal: 12,
    },
    toastOverlay: {
      flexDirection: 'row',
      marginBottom: 16,
      borderRadius: 12,
      padding: 8,
      width: '100%',
      backgroundColor: `${colors.grayscale[90]}CC`,
    },
    toastText: {
      paddingLeft: 6,
    },
  });

export default ToastProvider;
