import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAG8-fsD1VNm-VFNeMisEXIi-RJzveSNf8",
  authDomain: "expense-tracker-2591c.firebaseapp.com",
  projectId: "expense-tracker-2591c",
  storageBucket: "expense-tracker-2591c.appspot.com",
  messagingSenderId: "107495768010",
  appId: "1:107495768010:web:442333c23f43102283d933",
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//initialize service
const projectFirestore = firebase.fireStore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
