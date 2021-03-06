import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL:
        'firebase-adminsdk-7spat@sosvacinacampos.iam.gserviceaccount.com',
    });
  } catch (error) {
    throw new Error(error);
  }
}
export default admin.firestore();
