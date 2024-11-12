import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4prsShuzJu87cSGzaPTHYp7Ui-8T7ahE",
  authDomain: "cep-walking.firebaseapp.com",
  projectId: "cep-walking",
  storageBucket: "cep-walking.firebasestorage.app",
  messagingSenderId: "672795658256",
  appId: "1:672795658256:web:c97d1cb22b75c41d4ba295",
  measurementId: "G-YNX0CRSSEY",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };
