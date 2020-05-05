import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBpKxa-b5QSFqhtyMM1FUohI5noaO8kTSc",
    authDomain: "cloud-planner-f19cb.firebaseapp.com",
    databaseURL: "https://cloud-planner-f19cb.firebaseio.com",
    projectId: "cloud-planner-f19cb",
    storageBucket: "cloud-planner-f19cb.appspot.com",
    messagingSenderId: "1074210715551",
    appId: "1:1074210715551:web:afa4a8d119fe7e1ea96faa",
    measurementId: "G-42178227YD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 