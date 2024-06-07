// Configure o Firebase com suas credenciais
const firebaseConfig = {
    apiKey: "AIzaSyB2isxLBvIa7sBel74086yXDuB_jupO6SA",
    authDomain: "liorspencer-lspec.firebaseapp.com",
    databaseURL: "https://liorspencer-lspec-default-rtdb.firebaseio.com/",
    projectId: "liorspencer-lspec",
    storageBucket: "liorspencer-lspec.appspot.com",
    messagingSenderId: "97100777465",
    appId: "1:97100777465:web:7279a9487c309d27525f28"
   };
   firebase.initializeApp(firebaseConfig); // Inicialize o Firebase
   const database = firebase.database(); // Inicialize o banco de dados
   const storage = firebase.storage(); // Inicialize o storage
   