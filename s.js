// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbglYzdAiZvE65qBr280zZkJYB8ZrBGQI",
  authDomain: "military-marketplace.firebaseapp.com",
  projectId: "military-marketplace",
  storageBucket: "military-marketplace.firebasestorage.app",
  messagingSenderId: "351808819827",
  appId: "1:351808819827:web:d507fc324acd89365fd006",
  measurementId: "G-0ML62ZM4C1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);