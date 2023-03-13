import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAurpWhbyIbARN6oeLDOo1piMbYEMhoCHo",

  authDomain: "my-chat-app-private.firebaseapp.com",

  projectId: "my-chat-app-private",

  storageBucket: "my-chat-app-private.appspot.com",

  messagingSenderId: "726547814463",

  appId: "1:726547814463:web:b7b146539eae77e8b4408a",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
