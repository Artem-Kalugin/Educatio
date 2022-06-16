import React, { useEffect } from 'react';
import RootStack from './navigation';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useDispatch } from '@utils/hooks';
import { userWrite } from '@store/reducers/user/user';
import FirebaseUserApi from '@api/firebase/users';

const AppMiddleware = (): JSX.Element => {
  const dispatch = useDispatch();

  const onAuthStateChanged = async (user: FirebaseAuthTypes.User | null) => {
    if (user?.uid) {
      const userDb = await FirebaseUserApi.getUser(user.uid);
      if (userDb?.name) {
        dispatch(userWrite({ ...userDb, registrationComplete: true }));
      }
    } else {
      dispatch(userWrite(undefined));
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <RootStack />;
};

export default AppMiddleware;
