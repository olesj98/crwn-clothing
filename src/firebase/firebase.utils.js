import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyChCfhJ6xqXfIuwaFPFlBGufb_CBuaUHpQ",
  authDomain: "crwn-db-5a6df.firebaseapp.com",
  projectId: "crwn-db-5a6df",
  storageBucket: "crwn-db-5a6df.appspot.com",
  messagingSenderId: "359842865206",
  appId: "1:359842865206:web:8deae65ae2778b8612b897"
};

firebase.initializeApp(config);


export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;