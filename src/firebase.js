import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, setDoc } from "firebase/firestore";
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
const db = getFirestore();

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

export const addTodo = async (userId, todo) => {
  try {
    const todoRef = collection(db, "todos");
    await addDoc(todoRef, { userId, todo });
    toast.success('Todo added successfully!');
  } catch (error) {
    toast.error(error.message);
  }
};

export const getTodos = async (userId) => {
  try {
    const todosRef = collection(db, "todos");
    const querySnapshot = await getDocs(todosRef);
    const todos = [];
    querySnapshot.forEach((doc) => {
      if (doc.data().userId === userId) {
        todos.push({ id: doc.id, ...doc.data().todo });
      }
    });
    return todos;
  } catch (error) {
    toast.error(error.message);
    return [];
  }
};

export default app;
