import React, { useState, useEffect } from 'react';
import PostView from './PostView';
import { StackScreenProps } from '@react-navigation/stack';
import { StackParamList } from '@navigation/index';

type NavigationProps = StackScreenProps<StackParamList, 'Home'>;

type PassingProps = {};

const PostContainer: React.FC<NavigationProps> = (props): JSX.Element => {
  return <PostView {...props} />;
};

export type PresentationalProps = NavigationProps & PassingProps;

export default PostContainer;
