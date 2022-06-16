import React from 'react';
import PostView from './PostView';
import { StackScreenProps } from '@react-navigation/stack';
import { AppStackParams } from '@navigation/index';

type NavigationProps = StackScreenProps<AppStackParams, 'Post'>;

type PassingProps = {};

const PostContainer: React.FC<NavigationProps> = (props): JSX.Element => {
  return <PostView {...props} />;
};

export type PresentationalProps = NavigationProps & PassingProps;

export default PostContainer;
