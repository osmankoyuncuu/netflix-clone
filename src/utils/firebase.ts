import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA28sUsRtXMvL7uMqtH1lTkKKPQHn7RK2M",
  authDomain: "netflix-clone-afa47.firebaseapp.com",
  projectId: "netflix-clone-afa47",
  storageBucket: "netflix-clone-afa47.appspot.com",
  messagingSenderId: "338044420233",
  appId: "1:338044420233:web:b3b8dfae70895b10324658",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export default app;
export { auth, db };
