import * as React from 'react';
import ProfileContainer from '@screens/Profile';
import SearchContainer from '@screens/Search';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabbar from '@components/Tabbar';
import FeedContainer from '@screens/Feed';

export type HomeStackParams = {
  feed: undefined;
};

const HomeStackNav = createBottomTabNavigator<HomeStackParams>();

const HomeStack = (): JSX.Element => {
  return (
    <HomeStackNav.Navigator
      tabBar={props => <Tabbar {...props} />}
      screenOptions={{ headerShown: false }}
      initialRouteName="Feed">
      <HomeStackNav.Screen name="Feed" component={FeedContainer} />
      <HomeStackNav.Screen name="Search" component={SearchContainer} />
      <HomeStackNav.Screen name="Profile" component={ProfileContainer} />
    </HomeStackNav.Navigator>
  );
};

export default HomeStack;
