

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe21ypdm0lFi_2L238UF-HZHCZSgqEMY0",
  authDomain: "comercio-images.firebaseapp.com",
  projectId: "comercio-images",
  storageBucket: "comercio-images.appspot.com",
  messagingSenderId: "835125235269",
  appId: "1:835125235269:web:3032f3fd02d4481f411d2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app)

export { storage }