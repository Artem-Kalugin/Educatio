import React from 'react';
import { View, ViewStyle, StyleSheet, TouchableOpacity } from 'react-native';
import Text from '@ui-kit/Text';
import { PresentationalProps } from './index';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Header from '@components/Header';
import { colors } from '@styles/';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { inlineStyles } from 'react-native-svg';
import Icon from '@ui-kit/Icon';
import Modal from 'react-native-modal';
import ModalWrapper from '@components/ModalWrapper';
import Button from '@components/Button';
import TextInput from '@components/TextInput';

const SettingsView: React.FC<PresentationalProps> = (props): JSX.Element => {
  const insets = useSafeAreaInsets();
  const styles = getStyles(insets.bottom, insets.top);

  const renderSettingsItem = (
    text = 'default settings',
    iconName = 'delete',
    action = () => {},
  ) => {
    return (
      <TouchableOpacity
        onPress={action}
        activeOpacity={0.7}
        style={styles.settingsItem}>
        <Text color={colors.grayscale[90]}>{text}</Text>
        <Icon color={colors.grayscale[90]} name={iconName} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Header
        hideRightIcon
        onPressLeftIcon={() => props.navigation.goBack()}
        title="Settings"
      />
      <FastImage
        source={
          props.user?.background
            ? {
                uri: props.user?.background,
              }
            : require('../../assets/img/background.jpeg')
        }
        style={styles.image}
      />
      <ModalWrapper isVisible={props.descriptionVisible}>
        <Text style={styles.label}>Change info</Text>
        <TextInput
          value={props.description}
          onChangeText={e => props.setDescription(e)}
          textInputStyle={styles.descriptionInputElement}
          containerStyle={styles.descriptionInput}
          multiline={true}
          label={null}
        />
        <Button
          style={styles.changeDescirption}
          onPress={() => {
            props.changeDescription();
          }}
          disabled={!props.description}
          loading={props.modalLoading}
          value="Ok"
        />
        <Button
          type={'text'}
          value="Cancel"
          onPress={() => {
            props.setDescriptionVisible(false);
            props.setDescription(props.user?.description);
          }}
        />
      </ModalWrapper>
      <ModalWrapper isVisible={props.deleteVisible}>
        <Text style={styles.label}>Confirmation</Text>
        <Text>
          Please, confirm that you want to delete your account and all data by
          entering password
        </Text>
        <TextInput
          value={props.password}
          label="Password"
          masked={true}
          onChangeText={props.setPassword}
        />
        <Button
          style={styles.deleteButton}
          onPress={() => {
            props.deleteAccount();
          }}
          disabled={!props.password.length}
          loading={props.modalLoading}
          value="Delete"
        />
        <Button
          type={'text'}
          value="Cancel"
          onPress={() => {
            props.setDeleteVisible(false);
          }}
        />
      </ModalWrapper>
      <ScrollView>
        <View>
          <View style={styles.avatarContainer}>
            <FastImage
              source={
                props?.user?.avatar
                  ? {
                      uri: props.user?.avatar,
                    }
                  : require('../../assets/img/noavatar.png')
              }
              style={styles.avatar}
            />
          </View>
        </View>
        <View style={styles.container}>
          {renderSettingsItem('Change Avatar', 'person', props.onChangeAvatar)}
          {renderSettingsItem(
            'Change Profile Background Image',
            'image',
            props.onChangeBackgroundImage,
          )}
          {renderSettingsItem('Change Profile Info', 'description', () =>
            props.setDescriptionVisible(true),
          )}
          {renderSettingsItem('Manage Subscriptions', 'group', () =>
            props.navigation.navigate('Subscriptions'),
          )}
          {renderSettingsItem('Delete Account', 'delete', () =>
            props.setDeleteVisible(true),
          )}
        </View>
      </ScrollView>
      <View style={styles.signOut}>
        <TouchableOpacity onPress={props.signOut}>
          <Text color={colors.grayscale[80]}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const getStyles = (paddingBottom, paddingTop) =>
  StyleSheet.create({
    container: {
      paddingTop: 16,
      paddingHorizontal: 16,
    },
    image: {
      position: 'absolute',
      top: 44 + paddingTop,
      aspectRatio: 1.7,
      width: '100%',
      borderBottomWidth: 10,
      borderColor: 'white',
      zIndex: -1,
    },
    signOut: {
      position: 'absolute',
      bottom: 0,
      paddingBottom: paddingBottom + 4,
      width: '100%',
      alignItems: 'center',
    },
    avatarContainer: {
      height: 100,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      marginTop: 12,
      elevation: 2,
    },
    deleteButton: {
      marginTop: 12,
    },
    descriptionInput: {
      marginBottom: 12,
    },
    descriptionInputElement: {
      height: 120,
      textAlignVertical: 'top',
    },
    avatar: {
      position: 'absolute',
      height: 100,
      width: 100,
      backgroundColor: colors.grayscale[30],
      borderWidth: 10,
      borderRadius: 50,
      borderColor: 'white',
    },
    wrapper: {
      flex: 1,
      backgroundColor: colors.grayscale[5],
    },
    label: {
      fontSize: 20,
      fontWeight: '700',
    },
    settingsItem: {
      backgroundColor: 'white',
      height: 60,
      borderRadius: 20,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      elevation: 2,
    },
  });

export default SettingsView;
