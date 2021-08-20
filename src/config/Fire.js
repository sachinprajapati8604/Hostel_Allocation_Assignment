import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAE6_cS6cjbihrmMhPEM3iY66M-hAjB9BM",
    authDomain: "hotel-allocation-e57e3.firebaseapp.com",
    projectId: "hotel-allocation-e57e3",
    storageBucket: "hotel-allocation-e57e3.appspot.com",
    messagingSenderId: "156047840772",
    appId: "1:156047840772:web:dd5e0f957990abae314751",
    measurementId: "G-4DJ16ZYGCW"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
