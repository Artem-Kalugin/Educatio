import React, { useState, useEffect } from 'react';
import LoginView from './LoginView';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthStackParams } from '@navigation/auth';
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import ToastsActions from '@store/reducers/toasts/actions';
import { useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'react-native';

type NavigationProps = StackScreenProps<AuthStackParams, 'Login'>;

type PassingProps = {
  login: string;
  setLogin: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  loading: boolean;
  passwordIncorrect: boolean;
  onGoNext: () => void;
};

const LoginContainer: React.FC<NavigationProps> = (props): JSX.Element => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);
  const dispatch = useDispatch();

  useFocusEffect(() => {
    StatusBar.setBarStyle('light-content');
  });

  useEffect(() => {
    setPasswordIncorrect(false);
  }, [password]);

  const onGoNext = async () => {
    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(
        `${login.toLocaleLowerCase()}@educatio.by`,
        password,
      );
      props.navigation.navigate('Home');
    } catch (e) {
      if (
        e.code === 'auth/no-current-user' ||
        e.code === 'auth/user-not-found'
      ) {
        setPasswordIncorrect(true);
      } else {
        dispatch(
          ToastsActions.addToast(
            'An unexpected error occured, please try again later', "close"
          ),
        );
      }
    }
    setLoading(false);
  };

  return (
    <LoginView
      login={login}
      setLogin={setLogin}
      loading={loading}
      password={password}
      setPassword={setPassword}
      passwordIncorrect={passwordIncorrect}
      onGoNext={onGoNext}
      {...props}
    />
  );
};

export type PresentationalProps = NavigationProps & PassingProps;

export default LoginContainer;
