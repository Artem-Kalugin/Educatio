/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './auth';
import HomeStack from './home';
import {  useSelector } from '@utils/hooks';
import auth from '@react-native-firebase/auth';
import AnotherProfileContainer from '@screens/AnotherProfile';
import SubscriptionsContainer from '@screens/Subscriptions';
import PostContainer from '@screens/Post';
import SettingsContainer from '@screens/Settings';

export type AppStackParams = {
  Auth: undefined;
  Home: undefined;
  Settings: undefined;
  AnotherProfile: undefined;
  Subscriptions: undefined;
  Post: { itemId: number };
};

const WrapperStackNav = createStackNavigator();
const MainStackNav = createStackNavigator<AppStackParams>();

const RootStack = () => {
  return (
    <WrapperStackNav.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="App">
      <WrapperStackNav.Screen name="App" component={AppStack} />
    </WrapperStackNav.Navigator>
  );
};

const AppStack = props => {
  const user = useSelector(store => store.user.data);

  useEffect(() => {
    if (user?.registrationComplete && auth().currentUser?.email) {
      props.navigation.navigate('Home');
    }
  }, [user?.name]);

  return (
    <MainStackNav.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home">
      <MainStackNav.Screen name="Auth" component={AuthStack} />
      <MainStackNav.Screen name="Home" component={HomeStack} />
      <MainStackNav.Screen name="Settings" component={SettingsContainer} />
      <MainStackNav.Screen
        name="AnotherProfile"
        component={AnotherProfileContainer}
      />
      <MainStackNav.Screen
        name="Subscriptions"
        component={SubscriptionsContainer}
      />
      <MainStackNav.Screen name="Post" component={PostContainer} />
    </MainStackNav.Navigator>
  );
};

export default RootStack;
