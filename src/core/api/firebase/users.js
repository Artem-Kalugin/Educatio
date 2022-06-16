import firestore from '@react-native-firebase/firestore';

export default class FirebaseUserApi {
  static async createUser(userData, fId) {
    try {
      await firestore().collection('users').doc(fId).set(userData);
      return userData;
    } catch (e) {
      console.log(e);
    }
  }

  static async updateUser(userData, fId) {
    try {
      await firestore().collection('users').doc(fId).update(userData);
    } catch (e) {
      console.log(e);
    }
  }

  static async getUser(fId) {
    try {
      const user = await firestore().collection('users').doc(fId).get();
      return user.data();
    } catch (e) {
      console.log(e);
    }
  }

  static async deleteUser(fId) {
    try {
      console.log('delete user', fId);
      const user = await firestore().collection('users').doc(fId).delete();
      return user;
    } catch (e) {
      console.log(e);
    }
  }

  static async updateMongoUser(id, obj) {}
}
