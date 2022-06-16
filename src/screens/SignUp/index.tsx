import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import SignUpView from './SignUpView';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParams } from '@navigation/auth';
import FirebaseAuthApi from '@api/firebase/auth';
import ToastsActions from '@store/reducers/toasts/actions';
import { useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { userWrite } from '@store/reducers/user/user';

type NavigationProps = StackScreenProps<AuthStackParams, 'SignUp'>;

type PassingProps = {
  phone: string;
  setPhone: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  profileName: string;
  setProfileName: (value: string) => void;
  disableNextStep: Boolean;
  goNext: () => void;
  isLoading: boolean;
};

const SignUpContainer: React.FC<NavigationProps> = (props): JSX.Element => {
  const [profileName, setProfileName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const [profileError, setProfileError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const checkProfileError = (_profileName: string = profileName) => {
    setProfileError(
      !!_profileName.match(/^[0-9a-zA-Z]+$/) && profileName.length > 2,
    );
  };

  const checkPhoneError = (_phone: string = phone) => {
    setPhoneError(!!phone.slice(1, -1).match(/^[0-9]+$/im) && phone.length > 7);
  };

  useEffect(() => {
    checkPhoneError(phone);
    checkProfileError(profileName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phone, profileName]);

  const checkPhoneExists = async () => {
    try {
      const isExist = await FirebaseAuthApi.checkPhoneNumberExists(phone);
      if (isExist) {
        dispatch(
          ToastsActions.addToast(
            'Phone number already exists, try to recover your account', 'warning'
          ),
        );
      }
      return isExist;
    } catch (e) {
      console.log(e);
    }
  };

  const checkUserNameExists = async () => {
    try {
      const isExist = await FirebaseAuthApi.checkUserExists(profileName);
      if (isExist) {
        dispatch(
          ToastsActions.addToast(
            'User with that name already exists, try to recover your account',  'warning'
          ),
        );
      }
      return isExist;
    } catch (e) {
      console.log(e);
    }
  };

  const goNext = async () => {
    setIsLoading(true);
    try {
      const haveError = await Promise.all([
        checkPhoneExists(),
        checkUserNameExists(),
      ]);
      if (!haveError.filter(el => el).length) {
        await FirebaseAuthApi.verifyPhoneNumber(phone, (result: object) => {
          dispatch(
            userWrite({
              name: profileName,
              password: password,
              lowercaseName: profileName.toLocaleLowerCase(),
              phone: phone,
            }),
          );
          props.navigation.navigate('PhoneConfirmation', {
            phoneData: result,
          });
        });
      }
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  return (
    <SignUpView
      phone={phone}
      setPhone={setPhone}
      password={password}
      setPassword={setPassword}
      profileName={profileName}
      setProfileName={setProfileName}
      disableNextStep={!profileError || !phoneError || password.length < 6}
      goNext={goNext}
      isLoading={isLoading}
      {...props}
    />
  );
};

export type PresentationalProps = NavigationProps & PassingProps;

export default SignUpContainer;
