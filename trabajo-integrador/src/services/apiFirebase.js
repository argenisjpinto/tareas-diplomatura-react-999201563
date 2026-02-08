import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, query, where, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";

const tasksCollection = collection(db, "tasks");

export const addTask = async (task) => {
  const docRef = await addDoc(tasksCollection, {
    ...task,
    createdAt: serverTimestamp()
  });

  return {
    id: docRef.id,
    ...task
  };
};

export const getTasksByUser = async (userId) => {
  const q = query(tasksCollection, where("userId", "==", userId));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const updateTask = async (taskId, updates) => {
  const taskRef = doc(db, "tasks", taskId);
  await updateDoc(taskRef, updates);
};

export const deleteTask = async (taskId) => {
  const taskRef = doc(db, "tasks", taskId);
  await deleteDoc(taskRef);
};