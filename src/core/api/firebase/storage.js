import storage from '@react-native-firebase/storage';

export default class FirebaseStorageApi {
  static async uploadFile(pathToFileOnServer, pathToFileOnDevice) {
    try {
      const reference = await storage().ref(pathToFileOnServer);
      await reference.putFile(pathToFileOnDevice);
      const downloadUrl = await reference.getDownloadURL();
      return downloadUrl;
    } catch (e) {
      throw e;
    }
  }

  static async deleteFile(pathToFileOnServer) {
    try {
      const reference = await storage().ref(pathToFileOnServer).delete();
      return reference;
    } catch (e) {
      throw e;
    }
  }
}
