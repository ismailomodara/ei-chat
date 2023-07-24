import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

/**
 * Set variable to hold environment
 */
const environment = import.meta.env


/**
 * Set firebase configuration option
 */
const configuration = {
  apiKey: environment.VITE_FIREBASE_API_KEY,
  authDomain: environment.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: environment.VITE_FIREBASE_DATABASE_URL,
  projectId: environment.VITE_FIREBASE_PROJECT_ID,
  storageBucket: environment.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: environment.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: environment.VITE_FIREBASE_APP_ID,
  measurementId: environment.VITE_FIREBASE_MEASUREMENT_ID
};

/**
 * Initialize firebase app
 */
const firebase = getAuth(initializeApp(configuration))


export default firebase
