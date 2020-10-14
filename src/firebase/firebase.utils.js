import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC9d_gBGjIGmN_EmrhiltEj6L1uQk4-Shw",
    authDomain: "crwn-db-94e62.firebaseapp.com",
    databaseURL: "https://crwn-db-94e62.firebaseio.com",
    projectId: "crwn-db-94e62",
    storageBucket: "crwn-db-94e62.appspot.com",
    messagingSenderId: "361223048193",
    appId: "1:361223048193:web:6da2c70590670429820400",
    measurementId: "G-JT3470GR04"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
