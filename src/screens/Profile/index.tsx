import React from 'react';
import ProfileView from './ProfileView';
import { StackScreenProps } from '@react-navigation/stack';
import { HomeStackParams } from '@navigation/home/index';
import { useSelector } from '@utils/hooks';
import { User } from '@store/reducers/user/user';

type NavigationProps = StackScreenProps<HomeStackParams, 'Profile'>;

type PassingProps = {
  user?: User;
};

const ProfileContainer: React.FC<NavigationProps> = (props): JSX.Element => {
  const user = useSelector(store => store.user.data);

  return <ProfileView user={user} {...props} />;
};

export type PresentationalProps = NavigationProps & PassingProps;

export default ProfileContainer;
