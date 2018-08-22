import firebase from 'firebase/app';
import 'firebase/auth';
import * as secrets from '../constants/secrets';

const config = {
  apiKey: secrets.API_KEY,
  authDomain: secrets.AUTH_DOMAIN,
  databaseURL: secrets.DB_URL,
  projectId: secrets.PROJECT_ID,
  storageBucket: secrets.STORAGE_BUCKET,
  messagingSenderId: secrets.MESSAGING_SENDER_ID
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
