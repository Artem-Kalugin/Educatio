import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './auth';
import HomeStack from './home';
import SettingsStack from './settings';
import { useSelector } from 'react-redux';
import auth from '@react-native-firebase/auth';
import AnotherProfileContainer from '@screens/AnotherProfile';
import SubscriptionsContainer from '@screens/Subscriptions';
import PostContainer from '@screens/Post';

const WrapperStackNav = createStackNavigator();
const MainStackNav = createStackNavigator();

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
    // props.navigation.navigate('AnotherProfile');
    if (user?.registrationComplete && auth().currentUser?.email) {
      // props.navigation.navigate('Home');
    }
  }, [user?.name]);

  return (
    <MainStackNav.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="AnotherProfile">
      <MainStackNav.Screen name="Auth" component={AuthStack} />
      <MainStackNav.Screen name="Home" component={HomeStack} />
      <MainStackNav.Screen name="Settings" component={SettingsStack} />
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
