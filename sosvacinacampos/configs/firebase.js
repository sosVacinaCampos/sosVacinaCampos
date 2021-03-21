import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCbVmRUGlk_P63GG3Xta9Nxt83MdboUoy8",
  authDomain: "sosvacinacampos.firebaseapp.com",
  projectId: "sosvacinacampos",
  storageBucket: "sosvacinacampos.appspot.com",
  messagingSenderId: "490054607615",
  appId: "1:490054607615:web:85df107b9e4201c030a2ca"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase.firestore()