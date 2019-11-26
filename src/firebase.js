import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
 
    apiKey: "AIzaSyA7ZZPAd8Tw-FabYWDDn_TbFpHHcJe9SBA",
    authDomain: "my-appin.firebaseapp.com",
    databaseURL: "https://my-appin.firebaseio.com",
    projectId: "my-appin",
    storageBucket: "my-appin.appspot.com",
    messagingSenderId: "952430304627",
    appId: "1:952430304627:web:18a62fdf1f5f1760777906"
 
});

export { firebaseConfig as firebase }; 