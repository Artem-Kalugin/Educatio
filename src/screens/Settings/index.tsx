import React, { useState, useEffect } from 'react';
import SettingsView from './SettingsView';
import { StackScreenProps } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { userClear, userWrite } from '@store/reducers/user/user';
import ImagePicker from 'react-native-image-crop-picker';
import FirebaseStorageApi from '@api/firebase/storage';
import FirebaseUserApi from '@api/firebase/users';

type NavigationProps = StackScreenProps<StackParamList, 'Home'>;

type PassingProps = {
  signOut: () => void;
  user: object;
  onChangeAvatar: () => void;
  onChangeBackgroundImage: () => void;
  description: string;
  setDescription: (value: string) => void;
  descriptionVisible: boolean;
  setDescriptionVisible: (value: boolean) => void;
  deleteVisible: boolean;
  setDeleteVisible: (value: boolean) => void;
  modalLoading: boolean;
  changeDescription: () => void;
  deleteAccount: () => void;
  password: string;
  setPassword: (value: string) => void;
};

const SettingsContainer: React.FC<NavigationProps> = (props): JSX.Element => {
  const user = useSelector(store => store.user.data);
  const [description, setDescription] = useState(user?.description);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [deleteVisible, setDeleteVisible] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const signOut = () => {
    try {
      auth().signOut();
      dispatch(userClear());
      props.navigation.navigate('Auth');
    } catch (e) {
      console.log(e);
    }
  };

  const onChangeAvatar = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 256,
        height: 256,
        cropping: true,
      });
      const reference = await FirebaseStorageApi.uploadFile(
        `avatar/${user.uid}.jpeg`,
        image.path,
      );
      const newUser = { ...user, avatar: reference };
      await FirebaseUserApi.updateUser(newUser);
      dispatch(userWrite(newUser));
    } catch (e) {
      console.log(e);
    }
  };

  const onChangeBackgroundImage = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: 510,
        height: 300,
        cropping: true,
      });
      const reference = await FirebaseStorageApi.uploadFile(
        `background/${user.uid}.jpeg`,
        image.path,
      );
      const newUser = { ...user, background: reference };
      await FirebaseUserApi.updateUser(newUser);
      dispatch(userWrite(newUser));
    } catch (e) {
      console.log(e);
    }
  };

  const changeDescirption = async () => {
    setModalLoading(true);
    try {
      const newUser = { ...user, description: description };
      await FirebaseUserApi.updateUser(newUser, user.uid);
      setDescriptionVisible(false);
      dispatch(userWrite(newUser));
    } catch (e) {
      console.log(e);
    }
    setModalLoading(false);
  };

  const deleteAccount = async () => {
    setModalLoading(true);
    try {
      const emailProvider = auth.EmailAuthProvider.credential(
        `${user.lowercaseName}@educatio.by`,
        password,
      );
      await auth().currentUser?.reauthenticateWithCredential(emailProvider);
      await auth().currentUser?.delete();
      props.navigation.navigate('Auth', {
        screen: 'Start',
      });
      await FirebaseUserApi.deleteUser(user.uid);
      setDescriptionVisible(false);
      dispatch(userClear());
    } catch (e) {
      console.log(e);
    }
    setModalLoading(false);
  };

  useEffect(() => {}, []);

  return (
    <SettingsView
      signOut={signOut}
      onChangeAvatar={onChangeAvatar}
      onChangeBackgroundImage={onChangeBackgroundImage}
      description={description}
      setDescription={setDescription}
      descriptionVisible={descriptionVisible}
      setDescriptionVisible={setDescriptionVisible}
      deleteVisible={deleteVisible}
      setDeleteVisible={setDeleteVisible}
      changeDescription={changeDescirption}
      modalLoading={modalLoading}
      deleteAccount={deleteAccount}
      user={user}
      password={password}
      setPassword={setPassword}
      {...props}
    />
  );
};

export type PresentationalProps = NavigationProps & PassingProps;

export default SettingsContainer;
