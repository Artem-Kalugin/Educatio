import { TDispatch } from './../../index';
import { animateLayout } from '@utils/index';
import { addToast, deleteToast, clearToasts, Toast } from './toast';

class ToastsActions {
  static addToast(
    text: Toast['text'] = 'Default toast text',
    type: Toast['type'] = 'success',
  ) {
    return async (dispatch: TDispatch) => {
      const alertId = new Date().getTime();
      animateLayout();
      dispatch(
        addToast({
          text,
          type,
          id: alertId.toString(),
        }),
      );
      setTimeout(() => {
        animateLayout();
        dispatch(deleteToast(alertId));
      }, 4000);
    };
  }

  static clearToasts() {
    return async (dispatch: TDispatch) => {
      dispatch(clearToasts());
    };
  }
}

export default ToastsActions;
