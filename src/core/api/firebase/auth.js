import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default class FirebaseAuthApi {
  static async checkPhoneNumberExists(phoneNumber) {
    try {
      const existingUser = await firestore()
        .collection('users')
        .where('phone', '==', phoneNumber)
        .get();
      return existingUser._docs.length !== 0;
    } catch (e) {
      throw e;
    }
  }

  static async checkUserExists(userName) {
    try {
      const existingUser = await firestore()
        .collection('users')
        .where('lowercaseName', '==', userName)
        .get();
      return existingUser._docs.length !== 0;
    } catch (e) {
      throw e;
    }
  }

  static async updateUser(userData, fId) {
    try {
      await firestore().collection('users').doc(fId).update(userData);
    } catch (e) {
      console.log(e);
    }
  }

  static verifyPhoneNumber(phoneNumber, onSuccess, onError, onTimeout) {
    auth()
      .verifyPhoneNumber(phoneNumber)
      .on('state_changed', async snapshot => {
        console.log('snapshot', snapshot);
        switch (snapshot.state) {
          case auth.PhoneAuthState.ERROR:
            onError && onError(snapshot.error);
            break;
          case auth.PhoneAuthState.AUTO_VERIFY_TIMEOUT:
            onTimeout && onTimeout();
            break;
          case auth.PhoneAuthState.CODE_SENT:
            onSuccess && onSuccess(snapshot);
            break;
          default:
            return snapshot;
        }
      });
  }

  static async verifyCode(smsCode, verificationId) {
    try {
      const credential = auth.PhoneAuthProvider.credential(
        verificationId,
        smsCode,
      );
      const result = await auth().signInWithCredential(credential);
      return { credential, result };
    } catch (err) {
      throw err;
    }
  }

  static async deleteUser(id) {}

  static async updateMongoUser(id, obj) {}
}
