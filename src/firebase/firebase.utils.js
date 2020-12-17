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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch(err) {
      console.log('error creating new user', err.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);


export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;