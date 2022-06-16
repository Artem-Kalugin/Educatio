import React, { useState, useEffect } from 'react';
import PhoneConfirmationView from './PhoneConfirmationView';
import { StackScreenProps } from '@react-navigation/stack';
import AuthStack, { AuthStackParams } from '@navigation/auth';
import FirebaseAuthApi from '@api/firebase/auth';
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from '@utils/hooks';
import FirebaseUserApi from '@api/firebase/users';
import { userWrite } from '@store/reducers/user/user';

type NavigationProps = StackScreenProps<AuthStackParams, 'PhoneConfirmation'>;

type PassingProps = {
  code: string;
  setCode: (value: string) => void;
  loading: boolean;
  goNext: () => void;
};

const PhoneConfirmationContainer: React.FC<NavigationProps> = (
  props,
): JSX.Element => {
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const user = useSelector(store => store.user.data);
  const dispatch = useDispatch();

  const goNext = async () => {
    setLoading(true);
    try {
      await FirebaseAuthApi.verifyCode(
        code,
        props.route.params.phoneData.verificationId,
      );
      const emailProvider = auth.EmailAuthProvider.credential(
        `${user.lowercaseName}@educatio.by`,
        user.password,
      );
      await auth().currentUser?.linkWithCredential(emailProvider);
      const userfId = auth().currentUser?.uid;
      const _user = { ...user };
      delete _user.password;
      const createdUser = await FirebaseUserApi.createUser(
        { ..._user, uid: userfId },
        userfId,
      );
      dispatch(
        userWrite({ ...createdUser, registrationComplete: true, uid: userfId }),
      );
      props.navigation.navigate('Home');
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <PhoneConfirmationView
      goNext={goNext}
      code={code}
      setCode={setCode}
      loading={loading}
      {...props}
    />
  );
};

export type PresentationalProps = NavigationProps & PassingProps;

export default PhoneConfirmationContainer;
