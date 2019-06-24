/* eslint-disable prettier/prettier */
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBOTeeabgETZzX9be1HsXOXpppQcQlI-dc",
  authDomain: "coffee-manage-2.firebaseapp.com",
  databaseURL: "https://coffee-manage-2.firebaseio.com",
  projectId: "coffee-manage-2",
  storageBucket: "coffee-manage-2.appspot.com",
  messagingSenderId: "319120573961",
  appId: "1:319120573961:web:c9f13b87acd8dfb7"
};
firebase.initializeApp(config);
export default firebase;
