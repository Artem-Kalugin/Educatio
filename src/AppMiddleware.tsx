import React, { useEffect } from 'react';
import RootStack from './navigation';
import auth from '@react-native-firebase/auth';
import FirebaseAuthApi from '@api/firebase/auth';
import { useDispatch } from 'react-redux';
import { userWrite } from '@store/reducers/user/user';
import FirebaseUserApi from '@api/firebase/users';

const AppMiddleware = (): JSX.Element => {
  const dispatch = useDispatch();

  const onAuthStateChanged = async (user: object) => {
    if (user?._user?.uid) {
      console.log('get usser from db');
      const userDb = await FirebaseUserApi.getUser(user?._user?.uid);
      if (userDb?.name) {
        dispatch(userWrite({ ...userDb, registrationComplete: true }));
      }
    } else {
      dispatch(userWrite(null));
    }
    // dispatch(userWrite(user));
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return <RootStack />;
};

export default AppMiddleware;
