import React, { useState, useEffect } from 'react';
import ProfileView from './ProfileView';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '@navigation/index';
import { useSelector } from 'react-redux';

type NavigationProps = StackScreenProps<StackParamList, 'Home'>;

type PassingProps = {};

const ProfileContainer: React.FC<NavigationProps> = (props): JSX.Element => {
  const user = useSelector(store => store.user.data);

  return <ProfileView user={user} {...props} />;
};

export type PresentationalProps = NavigationProps & PassingProps;

export default ProfileContainer;
