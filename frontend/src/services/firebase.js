import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSZQme-Pv0HsNncB22crix46K36x34aU0",
  authDomain: "sec-firm-auth.firebaseapp.com",
  projectId: "sec-firm-auth",
  storageBucket: "sec-firm-auth.firebasestorage.app",
  messagingSenderId: "144802744934",
  appId: "1:144802744934:web:1fb3a2f1d1edae14d07ba7"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);