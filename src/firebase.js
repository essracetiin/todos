import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-hot-toast";

const firebaseConfig = {
  apiKey: "AIzaSyDDSqHziTQssmEciyyBpQj9nt90cjS4aHM",
  authDomain: "todos-33df8.firebaseapp.com",
  projectId: "todos-33df8",
  storageBucket: "todos-33df8.appspot.com",
  messagingSenderId: "198109056586",
  appId: "1:198109056586:web:2bb8f19d99f9276e3de0b3",
  measurementId: "G-D4X1LLGPHC",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const register = async (email, password) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    toast.success('Successfully register!')
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const login = async (email, password) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    toast.error(error.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return true;
  } catch (error) {
    toast.error(error.message);
  }
};

export default app;
