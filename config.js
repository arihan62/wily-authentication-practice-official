import firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBFjJbHbY4Opz8_kr4f4NH79E-YF3xaHjA",
  authDomain: "complaint-forum-1a016.firebaseapp.com",
  projectId: "complaint-forum-1a016",
  storageBucket: "complaint-forum-1a016.appspot.com",
  messagingSenderId: "841192755996",
  appId: "1:841192755996:web:62ac37f195942f45cae0d9",
  measurementId: "G-LRS63LF29W"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();