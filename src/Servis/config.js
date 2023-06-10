
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXE1UgzmTADhyMUYJtnAP3g0gFwrNJKoU",
  authDomain: "venta-de-picadas.firebaseapp.com",
  projectId: "venta-de-picadas",
  storageBucket: "venta-de-picadas.appspot.com",
  messagingSenderId: "718982119885",
  appId: "1:718982119885:web:2eff38a97da35ae6adc484"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);