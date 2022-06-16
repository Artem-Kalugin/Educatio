import * as React from 'react';
import SettingsContainer from '@screens/Settings';

import { createStackNavigator } from '@react-navigation/stack';

export type SettingsStackParams = {
  SettingsMain: undefined;
};

const SettingsStackNav = createStackNavigator<SettingsStackParams>();

const SettingsStack = (): JSX.Element => {
  return (
    <SettingsStackNav.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SettingsMain">
      <SettingsStackNav.Screen
        name="SettingsMain"
        component={SettingsContainer}
      />
    </SettingsStackNav.Navigator>
  );
};

export default SettingsStack;
